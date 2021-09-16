/* eslint-disable react/prop-types */
import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

export default function SavedMovies({
  handleBurgerClick,
  savedCards,
  loggedIn,
  isSavedMovie,
  onDeleteMovie,
}) {
  const [isLoading, setisLoading] = React.useState(false);

  function handleSearchClick() {
    setisLoading(true);
  }

  console.log(`а вот и карточки:${savedCards}`);

  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
      <section className="saved-movies">
        <SearchForm handleSearchClick={handleSearchClick} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            cards={savedCards}
            isSavedMovie={isSavedMovie}
            onDeleteMovie={onDeleteMovie}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

SavedMovies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
