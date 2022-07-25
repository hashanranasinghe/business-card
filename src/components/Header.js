import React from "react";
import img from "../img/girl.png";
export default function Header() {
  return (
    <div id="header">
      <img src={img}></img>
      <h1>Laura Smith</h1>
      <p id="dev">Frontend Developer</p>
      <p id="web">laurasmith.website</p>
    </div>
  );
}
