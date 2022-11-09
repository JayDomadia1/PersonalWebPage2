import React from "react";
import "./about.css";
import ME from "../../Images/Jay4.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";
let About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0</small>
            </article>
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            I am a 22 year old B.Tech graduate from K.J.Somaiya College of
            Engineering. I am a Front-End Web Developer with grasp of ReactJS.
            Blockchain and Web3.0 development is a technology that excistes me
            and would love to learn more about. My hobbies include playing
            football, playing guitar and love to spend my spare time with my
            dog.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
