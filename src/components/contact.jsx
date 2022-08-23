import React from "react";

export function Contact() {
  return (
    <div className="contactContainer">
      <h1>Contact</h1>
      <div className="contactHeader">
        <input type="text" name="" id="" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email" />
        <textarea name="" id="" cols="30" rows="10" />
        <button>Submit</button>
      </div>
      <div>
        <p>
          Call : <a href="tel:9677791912">9677791912</a>
        </p>
        <p>
          mail :{" "}
          <a href="mailto:aravinthan510@gmail.com">aravinthan510@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
