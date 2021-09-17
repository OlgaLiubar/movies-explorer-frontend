/* eslint-disable react/prop-types */
import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cardList, onSaveMovie, isSavedMovie, onDeleteMovie}) {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__gallery">
        {cardList.map((card) => (
          <MoviesCard 
          key={card.id}
          card={card}
          onSaveMovie={onSaveMovie}
          isSavedMovie={isSavedMovie}
          onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
      <button type="button" className="moviesCardList__more-button">
        Ещё
      </button>
    </section>
  );
}
