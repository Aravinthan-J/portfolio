import React from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./home";
import { Project } from "./projects";

export function Container() {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
