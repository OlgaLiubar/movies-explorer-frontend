/* eslint-disable react/prop-types */
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

export default function Movies({ handleBurgerClick, cards }) {
  const isLoading = false;
  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} />
      <section className="movies">
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList cards={cards} />}
      </section>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
