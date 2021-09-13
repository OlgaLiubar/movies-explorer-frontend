/* eslint-disable react/prop-types */
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import PropTypes from "prop-types";
import { useFormWithValidation } from "../../hooks/useForm";

export default function SearchForm({ findMovies }) {
  const { values, handleChange } = useFormWithValidation();

  const handleChangeInput = (evt) => {
    handleChange(evt);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    findMovies(values.input);
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
            required
            onChange={handleChangeInput}
          />
          <button
            className="search__button"
            type="submit"
            value="Найти фильм"
            id="search__button"
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