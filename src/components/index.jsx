import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./header";
import "./index.css";

import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./home";
import { Project } from "./projects";

export function Components() {
  return (
    <div className="mainContainer">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
