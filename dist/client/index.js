import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";
var rootEl = document.getElementById("root");
if (rootEl) {
  hydrateRoot(rootEl, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null)));
}