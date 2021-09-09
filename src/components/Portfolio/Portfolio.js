import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__section-title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://www.facebook.com/olga.lubar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="portfolio__link-txt">Статичный сайт</p>
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/OlgaLiubar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="portfolio__link-txt">Адаптивный сайт</p>
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/OlgaLiubar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="portfolio__link-txt">Одностраничное приложение</p>
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
