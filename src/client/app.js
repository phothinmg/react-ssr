import React from "react";
import { Route, Routes } from "react-router";
import { About } from "./about/index.js";
import { Home } from "./home.js";
import { Project } from "./project/index.js";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};
export default App;
