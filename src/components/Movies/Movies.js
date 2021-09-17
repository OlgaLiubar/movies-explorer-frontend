/* eslint-disable react/prop-types */
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";
import MovieNotFound from "../MovieNotFound/MovieNotFound";

export default function Movies({
  handleBurgerClick,
  cards,
  handleMovieSearch,
  loggedIn,
  onSaveMovie,
  isLoading,
  isSavedMovie,
}) {
  const [isCheckedForShortFilms, setIsCheckedForShortFilms] = React.useState(
    false
  );
 
  const [isShortFilm, setIsShortFilm] = React.useState(false);

  //если чекбокс отмечен, ищем в массиве с фильмами короткометражки
  function filterShortFilms(moviesArr) {
    return moviesArr.filter((movie) =>
      isShortFilm ? movie.duration <= 40 : true
    );
  }

  function handleCheck() {
    setIsCheckedForShortFilms(true);
    setIsShortFilm(!isShortFilm);
  }

  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
      <section className="movies">
        <SearchForm
          handleMovieSearch={handleMovieSearch}
          handleCheck={handleCheck}
        />
        {isLoading && <Preloader />}
        {filterShortFilms(cards).length === 0 && isCheckedForShortFilms && !isLoading && (
          <MovieNotFound />
        )}
        <MoviesCardList
          cardList={filterShortFilms(cards)}
          onSaveMovie={onSaveMovie}
          isSavedMovie={isSavedMovie}
        />
      </section>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
