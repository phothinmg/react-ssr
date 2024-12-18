const babel = require("@babel/core");
const fs = require("fs");
const path = require("path");
const npmDeps = require("./package.json").dependencies;

const compile = async (inputFile, outputFile) => {
  const inputCode = fs.readFileSync(inputFile, "utf8");
  const ast = await babel.transformAsync(inputCode, {
    filename: path.basename(inputFile),
    babelrc: true,
    plugins: [
      // Merge local dependencies
      {
        name: "merge-local-deps",
        visitor: {
          ImportDeclaration(path) {
            const specifier = path.node.specifiers[0];
            if (specifier.type === "ImportDefaultSpecifier") {
              const localDep = specifier.local.name;
              const npmDep = npmDeps[localDep];
              if (npmDep) {
                // Replace import with local dependency
                path.replaceWith(
                  babel.types.importDeclaration(
                    [babel.types.importDefaultSpecifier(specifier.local)],
                    babel.types.stringLiteral(`./${localDep}`)
                  )
                );
              }
            }
          },
        },
      },
      // Remove duplicate dependencies
      {
        name: "remove-duplicate-deps",
        visitor: {
          ImportDeclaration(path) {
            const specifier = path.node.specifiers[0];
            if (specifier.type === "ImportDefaultSpecifier") {
              const depName = specifier.local.name;
              if (npmDeps[depName]) {
                // Check if dependency is already imported
                const existingImport = path.findParent((parent) => {
                  return (
                    parent.isImportDeclaration() &&
                    parent.node.specifiers.some((s) => s.local.name === depName)
                  );
                });
                if (existingImport) {
                  // Remove duplicate import
                  path.remove();
                }
              }
            }
          },
        },
      },
    ],
  });

  const outputCode = ast.code;
  fs.writeFileSync(outputFile, outputCode);
};

compile("./src/client/index.tsx", "output.js");
