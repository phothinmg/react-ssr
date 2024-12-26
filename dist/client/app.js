import React from "react";
import { Route, Routes } from "react-router";
import { About } from "./about/index.js";
import { Home } from "./home.js";
import { Project } from "./project/index.js";
var App = () => {
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(About, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/project",
    element: /*#__PURE__*/React.createElement(Project, null)
  }));
};
export default App;