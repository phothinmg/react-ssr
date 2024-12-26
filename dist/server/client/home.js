import React from "react";
import { Link } from "react-router";
export var Home = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Home"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    to: "/about"
  }, "About"), ";", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    to: "/project"
  }, "Project"), ";");
};