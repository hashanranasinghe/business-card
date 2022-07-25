import React from "react";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <AiFillTwitterSquare id="ficon"/>
      <FaFacebookSquare id="ficon"/>
      <AiFillInstagram id="ficon"/>
      <AiFillGithub id="ficon"/>
    </footer>
  );
}
