import React from "react";
import { Container } from "./container";
import { Header } from "./header";
import "./index.css";

export function Components() {
  return (
    <div className="mainContainer">
      <Header />
      <Container />
    </div>
  );
}
