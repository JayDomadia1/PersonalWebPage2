import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

let HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="__blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
