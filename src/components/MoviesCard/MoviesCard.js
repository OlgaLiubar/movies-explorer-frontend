import React from "react";
import PropTypes from "prop-types";
import cardImg from "../../images/cardImg.png";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ card }) {
  const path = useLocation().pathname;
  const isSaved = card.saved;

  function handlePathChange() {
    let btnClassName = "";
    if (path === "/saved-movies") {
      btnClassName = "card__save-button_delete";
    } else if (isSaved) {
      btnClassName = "card__save-button_checked";
    } else {
      btnClassName = "card__save-button";
    }
    return btnClassName;
  }

  return (
    <li className="card">
      <img
        src={cardImg}
        alt="Кадр из фильма 'Сто лет дизайна'"
        className="card__image"
      />
      <button className={handlePathChange()} type="button">
        {isSaved || path === "/saved-movies" ? "" : "Сохранить"}
      </button>
      <div className="card__info">
        <h2 className="card__title">Киноальманах «100 лет дизайна»</h2>
        <p className="card__duration">1ч 17м</p>
      </div>
    </li>
  );
}

MoviesCard.propTypes = {
  card: PropTypes.object.isRequired,
};
