/* eslint-disable react/prop-types */
import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cards, onSaveMovie, isSavedMovie}) {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__gallery">
        {cards.map((card) => (
          <MoviesCard 
          key={card.id}
          card={card}
          onSaveMovie={onSaveMovie}
          isSavedMovie={isSavedMovie}
          />
        ))}
      </ul>
      <button type="button" className="moviesCardList__more-button">
        Ещё
      </button>
    </section>
  );
}
