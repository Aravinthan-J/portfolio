import React from "react";
import mypic from "../assests/mypic.jpg";

export function Home() {
  return (
    <div className="homeContainer">
      <div className="rightContainer">
        <span className="wordHello">Hello!</span>
        <span className="wordName">I am Aravinthan</span>
        <span className="wordRole">Frontend Developer</span>
      </div>
      <div className="leftContainer">
        <img src={mypic} height={200} />
      </div>
    </div>
  );
}
