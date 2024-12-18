import { deps } from "./deps.js";

const root = process.cwd();

const depen = deps({
  dependency: "../client/app.js",
  filename: "./src/server/index.tsx",
  directory: ".",
});

console.log(depen);
