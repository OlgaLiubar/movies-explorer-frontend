/* eslint-disable react/prop-types */
import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function Movies({cards}) {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__gallery">
        {cards.map((card) => (
          <MoviesCard 
          key={card.id}
          card={card}
          />
        ))}
      </ul>
      <button type="button" className="moviesCardList__more-button">
        Ещё
      </button>
    </section>
  );
}
