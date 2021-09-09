import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

const cards = [
  { saved: false },
  { saved: true },
  { saved: true },
  { saved: false },
];

export default function Movies() {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__gallery">
        {cards.map((i) => (
          <MoviesCard key={[i]} card={i} />
        ))}
      </ul>
      <button type="button" className="moviesCardList__more-button">
        Ещё
      </button>
    </section>
  );
}
