import React from "react";
import { Link } from "react-router";
export const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <br />
        <Link to="/about">About</Link>;
        <br />
        <Link to="/project">Project</Link>;
    </div>
  );
};