import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";
import { jsx as _jsx } from "react/jsx-runtime";
var rootEl = document.getElementById("root");
if (rootEl) {
  hydrateRoot(rootEl, /*#__PURE__*/_jsx(BrowserRouter, {
    children: /*#__PURE__*/_jsx(App, {})
  }));
}