/* eslint-disable react/prop-types */
import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cards, onSaveMovie}) {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__gallery">
        {cards.map((card) => (
          <MoviesCard 
          key={card.id}
          card={card}
          onSaveMovie={onSaveMovie}
          />
        ))}
      </ul>
      <button type="button" className="moviesCardList__more-button">
        Ещё
      </button>
    </section>
  );
}
