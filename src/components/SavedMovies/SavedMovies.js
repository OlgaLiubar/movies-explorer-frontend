import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";

export default function SavedMovies({ handleBurgerClick }) {
 
  const [isLoading, setisLoading] = React.useState(false);

  function handleSearchClick() {
    setisLoading(true);
  }
  
  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} />
      <section className="saved-movies">
        <SearchForm handleSearchClick={handleSearchClick}/>
        {isLoading ? <Preloader /> : <MoviesCardList />}
      </section>
      <Footer />
    </>
  );
}

SavedMovies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
