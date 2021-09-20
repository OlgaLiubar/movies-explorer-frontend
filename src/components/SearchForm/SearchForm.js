/* eslint-disable react/prop-types */
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import PropTypes from "prop-types";
import { useFormWithValidation } from "../../hooks/useForm";

export default function SearchForm({
  handleMovieSearch,
  handleCheck,
  // resetShownMovies,
  isCheckedForShortFilms,
  localArr,
  savedMovies
}) {

////////
const { values, handleChange, isValid } = useFormWithValidation({});
const [isError, setIsError] = React.useState(false);
console.log(isError)
// const styleError = isError
  // ? "form__error_visible form__error"
  // : "form__error";
/////////

  const handleChangeInput = (evt) => {
    handleChange(evt);
    setIsError(false);
  };

  function handleSubmit(evt) {
    setIsError(false);
    if(evt) {
      evt.preventDefault();
    }
    if (!isValid) {
      setIsError(true);
    } else if (!savedMovies) {
      handleMovieSearch(values.input, localArr);
      localStorage.setItem("queryM", values.input);
    } else if (savedMovies) {
      localStorage.setItem("querySM", values.input);
      return handleMovieSearch(values.input, localArr);
    }
    return;
  }

  return (
    <section className="search">
      <form className="search__form" noValidate onSubmit={handleSubmit}>
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
        <FilterCheckbox 
        handleCheck={handleCheck} 
        isCheckedForShortFilms={isCheckedForShortFilms}/>
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  handleSearchClick: PropTypes.func,
};
