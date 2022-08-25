import React from "react";

export function About() {
  return (
    <div className="aboutContainer">
      <div>
        <p className="descriptionData">
          {/* <span>About</span> */}
          I'm Aravinthan, a web Developer based in Salem, India. I have passion
          for web development and love to create web and mobile applications
          using web stack.. I'm searching new things every day which is
          Improving me and by grabbing the opportunities to learn new
          technologies.
        </p>
        <div className="skillcon">
          <h1 className="skillshead">Skills</h1>
          <p className="skills">
            <ul>
              <li>React.js</li>
              <li>React Native</li>
              <li>CSS</li>
              <li>SCSS</li>
            </ul>
            <ul>
              <li> JAVASCRIPT</li>
              <li>HTML</li>
              <li> Node.js</li>
              <li> Firebase </li>
              <li>SQL</li>
            </ul>
            <ul>
              <li>MongoDB</li>
              <li>Java</li>
              <li> Python</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
