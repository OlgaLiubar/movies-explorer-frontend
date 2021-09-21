/* eslint-disable react/prop-types */
import React from "react";
import MovieNotFound from "../MovieNotFound/MovieNotFound";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
  cardList,
  onSaveMovie,
  isSavedMovie,
  onDeleteMovie,
  setMaxNumberOfMovies,
  maxNumberOfMovies,
  step,
  isLoading,
  notFound,
  allMovies
}) {
  //увеличивает кол-во карточек на шаг
  function handleMoreBtnClick() {
    return setMaxNumberOfMovies(maxNumberOfMovies + step);
  }

  const moviesToRender = cardList.slice(0, maxNumberOfMovies);

  return (
    <section className="moviesCardList">
      {notFound && !isLoading && <MovieNotFound />}
      <ul className="moviesCardList__gallery">
        {moviesToRender.map((card) => (
          <MoviesCard
            key={card.id || card._id}
            card={card}
            onSaveMovie={onSaveMovie}
            isSavedMovie={isSavedMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
      {allMovies && cardList.length > maxNumberOfMovies && (
        <button
          className="moviesCardList__more-button"
          onClick={handleMoreBtnClick}
        >
          Еще
        </button>
      )}
    </section>
  );
}
