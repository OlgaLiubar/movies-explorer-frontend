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
  isCheckedForShortFilms,
  filterShortFilms,
  handleCheck,
  resetShownMovies,
  setMaxNumberOfMovies, 
  maxNumberOfMovies,
  setStep,
  step
}) {

  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
      <section className="movies">
        <SearchForm
          handleMovieSearch={handleMovieSearch}
          handleCheck={handleCheck}
          resetShownMovies={resetShownMovies}
        />
        {isLoading && <Preloader />}
        {filterShortFilms(cards).length === 0 &&
          isCheckedForShortFilms &&
          !isLoading && <MovieNotFound />}
        <MoviesCardList
          cardList={filterShortFilms(cards)}
          onSaveMovie={onSaveMovie}
          isSavedMovie={isSavedMovie}
          setMaxNumberOfMovies={setMaxNumberOfMovies}
          maxNumberOfMovies={maxNumberOfMovies}
          setStep={setStep}
          step={step}
        />
      </section>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
