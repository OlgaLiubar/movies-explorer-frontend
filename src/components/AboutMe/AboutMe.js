import React from "react";
import studentPhoto from "../../images/studentPhoto.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__text-wrapper">
          <h3 className="about-me__section-title">Виталий</h3>
          <p className="about-me__section-subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
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
