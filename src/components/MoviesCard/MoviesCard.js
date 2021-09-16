/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { getTimeFromMins } from "../../utils/functions";
import { useLocation } from "react-router-dom";

export default function MoviesCard({
  card,
  onSaveMovie,
  // onDeleteMovie,
  isSavedMovie,
}) {
  const path = useLocation().pathname;

  const isSaved = isSavedMovie(card);

  function handleButtonChange() {
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

  function handleSaveClick() {
    // console.log('clicked')
    onSaveMovie(card);
  }

  function handleDeleteClick() {
    // onDeleteMovie(card);
    console.log('clicked')
  }

  return (
    <li className="card">
      <a
        className="card__link"
        href={card.trailerLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src={card.img ? card.img : card.image}
          alt={card.image.name}
          className="card__image"
        />
      </a>
      <button
        className={handleButtonChange()}
        type="button"
        onClick={path === "/saved-movies" ? handleDeleteClick : handleSaveClick }
      >
        {isSaved || path === "/saved-movies" ? "" : "Сохранить"}
      </button>

      <div className="card__info">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__duration">{getTimeFromMins(card.duration)}</p>
      </div>
    </li>
  );
}

MoviesCard.propTypes = {
  card: PropTypes.object.isRequired,
};
