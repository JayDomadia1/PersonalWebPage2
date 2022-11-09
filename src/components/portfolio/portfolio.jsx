import React from "react";
import "./portfolio.css";
import IMG1 from "../../Images/TinDog.jpg";
import IMG2 from "../../Images/rockPaperScissors.jpg";
import IMG3 from "../../Images/FightingGame.jpg";
import IMG4 from "../../Images/keeperApp.jpg";
import data from "./array";

let Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;

// <article className="portfolio__item">
// <div className="portfolio__item-image">
//   <img src={IMG1} alt="TinDog" />
// </div>
// <h3>This is a portfolio item title</h3>
// <div className="portfolio__item-cta">
//   <a href="https://github.com" className="btn" target="_blank">
//     GitHub
//   </a>
//   <a
//     href="https://github.com"
//     className="btn btn-primary"
//     target="_blank"
//   >
//     Live Demo
//   </a>
// </div>
// </article>
