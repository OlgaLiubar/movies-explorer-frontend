import React from "react";
import studentPhoto from "../../images/studentPhoto.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__text-wrapper">
          <h3 className="about-me__section-title">Ольга</h3>
          <p className="about-me__section-subtitle">
            Фронтенд-разработчица, 31 год
          </p>
          <p className="about-me__text">
            Родилась и живу в Санкт-Петербурге, закончила магистратуру по
            аглийской литературе и лингвистике Университета Гранады. Шесть лет
            проработала переводчиком с испанского на руднике в Гватемале. После
            окончания курса по веб-разработке планирую найти работу в новой
            сфере.
          </p>
          <ul className="about-me__social">
            <li className="about-me__social-item">
              <a
                className="about-me__link"
                href="https://www.facebook.com/olga.lubar"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="about-me__social-item">
              <a
                className="about-me__link"
                href="https://github.com/OlgaLiubar"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__photo"
          src={studentPhoto}
          alt="Фотография студента"
        />
      </div>
    </section>
  );
}

export default AboutMe;
