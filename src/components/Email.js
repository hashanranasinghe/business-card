import React from "react";
import {MdEmail} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai"

export default function Email() {
  return (
    <div id="button">
      <button id="email"><MdEmail id="icon" viewBox="0 0 20 20"/>Email</button>
      <button id="link"><AiFillLinkedin id="licon" viewBox="0 0 900 900"/>LinkedIn</button>
    </div>
  );
}
