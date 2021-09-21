/* eslint-disable react/prop-types */
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";
// import MovieNotFound from "../MovieNotFound/MovieNotFound";

export default function Movies({
  handleBurgerClick,
  cards,
  handleMovieSearch,
  loggedIn,
  onSaveMovie,
  isLoading,
  isSavedMovie,
  isCheckedForShortFilms,
  handleCheck,
  setMaxNumberOfMovies,
  maxNumberOfMovies,
  setStep,
  step,
  savedMovies,
  foundMovies,
  notFound,
  onDeleteMovie,
  customErr,
  fetchErrMsg, 
}) {
  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
      <section className="movies">
        <SearchForm
          handleMovieSearch={handleMovieSearch}
          handleCheck={handleCheck}
          isShortFilms={isCheckedForShortFilms}
          localArr={localStorage.movies}
        />
      <p className="movies__error">{fetchErrMsg || ""}</p>
        {isLoading && <Preloader />}
        <MoviesCardList
          cardList={cards}
          onSaveMovie={onSaveMovie}
          isSavedMovie={isSavedMovie}
          setMaxNumberOfMovies={setMaxNumberOfMovies}
          maxNumberOfMovies={maxNumberOfMovies}
          setStep={setStep}
          step={step}
          savedMovies={savedMovies}
          foundMovies={foundMovies}
          isLoading={isLoading}
          notFound={notFound}
          onDeleteMovie={onDeleteMovie}
          customErr={customErr}
        />
      </section>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
