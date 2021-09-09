import React from "react";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__articles">
        <li>
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="about-project__timebar">
        <div className="about-project__timebar-back">
          <div className="about-project__timebar-duration about-project__timebar-duration_back-weeks">
            1 неделя
          </div>
          <p className="about-project__timebar-caption">Back-end</p>
        </div>
        <div className="about-project__timebar-front">
          <div className="about-project__timebar-duration about-project__timebar-duration_front-weeks">
            4 недели
          </div>
          <p className="about-project__timebar-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
