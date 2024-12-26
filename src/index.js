import express from "express";
import React from "react";
import path from "node:path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./client/app.js";

const app = express();

app.use(express.static(path.join(process.cwd(), "dist/client")));
//* - it will match every request
app.get("*", (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.send(
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
          <title>React SSR Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script type="module" src="/index.js"></script>
        </body>
      </html>
    `
  );
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
