import React from "react";
import {
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export function Contact() {
  return (
    <div className="contactContainer">
      <div>
        <h1>Contact</h1>
        <div className="contactHeader">
          <input type="text" name="" id="" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write your message here"
          />
          <button>Submit</button>
        </div>
        <div className="contactFooter">
          <p>
            <a href="tel:9677791912">
              <PhoneOutlined rotate={90} />
            </a>
          </p>
          <p>
            <a href="mailto:aravinthan510@gmail.com">
              <MailOutlined />
            </a>
          </p>
          <p>
            <a href="https://twitter.com/jaiaravinthan">
              <TwitterOutlined />
            </a>
          </p>
          <p>
            <a href=" https://www.instagram.com/ur_comrade_j_/">
              <InstagramOutlined />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
