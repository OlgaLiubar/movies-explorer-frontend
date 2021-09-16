/* eslint-disable react/prop-types */
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

export default function Movies({
  handleBurgerClick,
  cards,
  findMovies,
  loggedIn,
  onSaveMovie,
  isLoading,
  isSavedMovie,
}) {
  console.log(cards);
  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
      <section className="movies">
        <SearchForm findMovies={findMovies} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            cards={cards}
            onSaveMovie={onSaveMovie}
            isSavedMovie={isSavedMovie}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
