import React from "react";
import getTimeFromMins from "../../utils/getTimeFromMins";
import { useLocation } from "react-router-dom";
const IMG_BASE_URL = "https://api.nomoreparties.co";

export default function MoviesCard({
  card,
  onSaveMovie,
  onDeleteMovie,
  isSavedMovie,
}) {
  const path = useLocation().pathname;

  const savedMovie = isSavedMovie(card);

  function handleButtonChange() {
    let btnClassName = "";
    if (path === "/saved-movies") {
      btnClassName = "card__save-button_delete";
    } else if (savedMovie) {
      btnClassName = "card__save-button_checked";
    } else {
      btnClassName = "card__save-button";
    }
    return btnClassName;
  }

  function handleSaveBtnClick() {
    if (!savedMovie) {
      onSaveMovie(card);
      console.log(card);
    } else {
      onDeleteMovie(savedMovie._id);
    }
  }

  function handleDeleteClick() {
    onDeleteMovie(card._id);
    console.log("clicked");
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
          src={card.image.url ? `${IMG_BASE_URL}${card.image.url}` : card.image}
          alt={card.image.name}
          className="card__image"
        />
      </a>
      <button
        className={handleButtonChange()}
        type="button"
        onClick={
          path === "/saved-movies" ? handleDeleteClick : handleSaveBtnClick
        }
      >
        {savedMovie || path === "/saved-movies" ? "" : "Сохранить"}
      </button>

      <div className="card__info">
        <h2 className="card__title">{card.nameRU}</h2>
        <p className="card__duration">{getTimeFromMins(card.duration)}</p>
      </div>
    </li>
  );
}
