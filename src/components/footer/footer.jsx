import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

let Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/jaydomadia_/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jay-domadia-6388011b5/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jay Domadia, All rights reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
