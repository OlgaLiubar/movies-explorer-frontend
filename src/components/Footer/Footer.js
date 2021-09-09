import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <p className="footer__credits">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__wrapper">
        <p className="footer__copy">&#169; 2021</p>

        <ul className="footer__list">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
