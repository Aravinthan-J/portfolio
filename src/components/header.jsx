import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="headerContainer">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/project">
        <div>Projects</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </div>
  );
}
