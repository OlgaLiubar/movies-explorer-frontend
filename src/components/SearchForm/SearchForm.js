/* eslint-disable react/prop-types */
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import PropTypes from "prop-types";

export default function SearchForm({ handleMovieSearch, isShortFilm, handleCheck, resetShownMovies }) {
  const [query, setQuery] = React.useState("");

  const handleChangeInput = (evt) => {
    setQuery(evt.target.value);
  }

  console.log(query);
  
//нажимаем на поиск, записываем запрос в стейт, ищем фильмы по запросу
  function handleSubmit(evt) {
    evt.preventDefault();
    if(query.length == 0) {
      resetShownMovies()
    }
    handleMovieSearch(query);
    setQuery("");
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            name="input"
            placeholder="Фильм"
            onChange={handleChangeInput}
          />
          <button
            className="search__button"
            type="submit"
            value="Найти фильм"
            id="search__button"
          />
        </div>
        <FilterCheckbox isShortFilm={isShortFilm} handleCheck={handleCheck}/>
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  handleSearchClick: PropTypes.func,
};