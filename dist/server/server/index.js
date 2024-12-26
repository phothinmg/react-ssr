import express from "express";
import React from "react";
import path from "node:path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../client/app.js";
var app = express();
app.use(express.static(path.join(process.cwd(), "dist/client")));
//* - it will match every request
app.get("*", (req, res) => {
  var html = renderToString(/*#__PURE__*/React.createElement(StaticRouter, {
    location: req.url
  }, /*#__PURE__*/React.createElement(App, null)));
  res.send("\n      <!DOCTYPE html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n          <link rel=\"stylesheet\" href=\"https://cdn.simplecss.org/simple.min.css\" />\n          <title>React SSR Example</title>\n        </head>\n        <body>\n          <div id=\"root\">".concat(html, "</div>\n          <script type=\"module\" src=\"/index.js\"></script>\n        </body>\n      </html>\n    "));
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});