/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { getTimeFromMins } from "../../utils/functions";
// import cardImg from "../../images/cardImg.png";
// import { useLocation } from "react-router-dom";

export default function MoviesCard({ card }) {
  // const path = useLocation().pathname;
  // const isSaved = card.saved;

  // function handlePathChange() {
  //   let btnClassName = "";
  //   if (path === "/saved-movies") {
  //     btnClassName = "card__save-button_delete";
  //   } else if (isSaved) {
  //     btnClassName = "card__save-button_checked";
  //   } else {
  //     btnClassName = "card__save-button";
  //   }
  //   return btnClassName;
  // }

  return (
    <li className="card">
      <img
        src={` https://api.nomoreparties.co${card.image.url}`}
        alt={card.image.name}
        className="card__image"
      />
      {/* <button className={handlePathChange()} type="button">
        {isSaved || path === "/saved-movies" ? "" : "Сохранить"}
      </button> */}
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
