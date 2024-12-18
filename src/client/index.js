import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const rootEl = document.getElementById("root");
if (rootEl) {
  hydrateRoot(
    rootEl,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
