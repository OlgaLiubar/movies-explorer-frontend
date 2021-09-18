/* eslint-disable react/prop-types */
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
  savedCards,
  loggedIn,
  isSavedMovie,
  onDeleteMovie,
  handleSavedMovieSearch,
  isCheckedForShortFilms,
  filterShortFilms,
  handleCheck,
  resetShownMovies,
  setMaxNumberOfMovies, 
  maxNumberOfMovies,
  setStep,
  step
}) {

  console.log(`а вот и карточки:${savedCards}`);

  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
      <section className="saved-movies">
        <SearchForm     
          handleMovieSearch={handleSavedMovieSearch}
          handleCheck={handleCheck}
          resetShownMovies={resetShownMovies}
          />
        {isLoading && <Preloader/>}
      {(savedCards.length === 0 && !isCheckedForShortFilms)
      && <p className="no-saved-movies">У вас пока нет сохраненных фильмов</p>}
          <MoviesCardList
            cardList={filterShortFilms(savedCards)}
            isSavedMovie={isSavedMovie}
            onDeleteMovie={onDeleteMovie}
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

SavedMovies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
