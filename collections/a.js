import fs from "node:fs";
import path from "node:path";
import { transformFromAst } from "@babel/core";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";

const transformAst = (ast, file) => {
  const { code } = transformFromAst(ast, null, {
    filename: path.basename(file),
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            esmodules: true,
          },
          modules: false,
        },
      ],
      ["@babel/preset-react"],
      [
        "@babel/preset-typescript",
        {
          allowNamespaces: true,
          onlyRemoveTypeAnnotations: true,
        },
      ],
    ],
    plugins: [
      //   "@babel/plugin-transform-runtime",
      //   "@babel/plugin-transform-async-to-generator",
      //   "@babel/plugin-transform-object-assign",
      "@babel/plugin-transform-json-modules",
      "@babel/plugin-transform-typescript",
      [
        "@babel/plugin-transform-react-jsx",
        {
          throwIfNamespace: false, // defaults to true
          runtime: "automatic",
        },
      ],
    ],
  });
  return code;
};

const getAsset = (file) => {
  const content = fs.readFileSync(file, "utf-8");
  const ast = parse(content, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
  const dependencies = [];

  const bindings = {};
  const traverseAst = traverse.default;
  traverseAst(ast, {
    ImportDeclaration(path) {
      const source = path.node.source.value;
      dependencies.push(source);
    },
  });
  const code = transformAst(ast, file);
  return { code, dependencies, file };
};
const code = getAsset("./src/server/index.tsx").code;
//console.log(getAsset("./src/server/index.tsx"));
