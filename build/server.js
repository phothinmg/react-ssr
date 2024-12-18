#!/usr/bin/env node

import $ from "dax-sh";
import { existsSync } from "node:fs";
import cleanDirectory from "./clean.js";
const out = "dist/server";

if (existsSync(out)) {
  await cleanDirectory(out);
}

await $.sleep(1000);
await $`npx tsc -p ./build/server-tsconfig.json`;
await $.sleep(2000);
await $`npx babel tsc  --out-dir ${out}`;
await $.sleep(2000);
await $`rm -r tsc`;
