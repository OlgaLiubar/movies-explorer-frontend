import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

export default function SavedMovies({
  isLoading,
  handleBurgerClick,
  savedMovies,
  loggedIn,
  isSavedMovie,
  onDeleteMovie,
  handleMovieSearch,
  isCheckedForSavedShortFilms,
  handleCheck,
  foundSavedMovies,
  setMaxNumberOfMovies,
  maxNumberOfMovies,
  setStep,
  step,
  notFound,
  fetchErrMsg,
}) {
  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
      <section className="saved-movies">
        <SearchForm
          handleMovieSearch={handleMovieSearch}
          handleCheck={handleCheck}
          isShortFilms={isCheckedForSavedShortFilms}
          savedMov={true}
          localArr={localStorage.savedMovies}
        />
        <p className="movies__error">{fetchErrMsg || ""}</p>
        {isLoading && <Preloader />}
        <MoviesCardList
          cardList={foundSavedMovies}
          savedMovies={savedMovies}
          isSavedMovie={isSavedMovie}
          onDeleteMovie={onDeleteMovie}
          setMaxNumberOfMovies={setMaxNumberOfMovies}
          maxNumberOfMovies={maxNumberOfMovies}
          setStep={setStep}
          step={step}
          notFound={notFound}
        />
      </section>
      <Footer />
    </>
  );
}

SavedMovies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
