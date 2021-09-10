import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import PropTypes from "prop-types";

export default function SearchForm({handleSearchClick}) {
  return (
    <section className="search">
      <form action="#" className="search__form">
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            name="input"
            placeholder="Фильм"
            required
          />
          <button
            className="search__button"
            type="submit"
            value="Найти фильм"
            id="search__button"
            onClick={handleSearchClick}
          />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  handleSearchClick: PropTypes.func,
};