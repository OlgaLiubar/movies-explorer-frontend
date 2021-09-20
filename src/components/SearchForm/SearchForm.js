/* eslint-disable react/prop-types */
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import PropTypes from "prop-types";
import { useFormWithValidation } from "../../hooks/useForm";

export default function SearchForm({
  handleMovieSearch,
  handleCheck,
  isCheckedForShortFilms,
  localArr,
  savedMov,
}) {

  const { values, handleChange, isValid } = useFormWithValidation({});
  const [isError, setIsError] = React.useState(false);
  // console.log(isError)
  const errorSelector = isError ? "error error_centered" : "error_invisible";

  const handleChangeInput = (evt) => {
    handleChange(evt);
    setIsError(false);
  };

  function handleSubmit(evt) {
    setIsError(false);
    if (evt) {
      evt.preventDefault();
    }
    if (!isValid) {
      setIsError(true);
    } else if (!savedMov) {
      handleMovieSearch(values.input, localArr);
      localStorage.setItem("queryM", values.input);
    } else if (savedMov) {
      localStorage.setItem("querySM", values.input);
      // console.log(localArr);
      return handleMovieSearch(values.input, localArr);
    }
    return;
  }

  return (
    <section className="search">
<span className={errorSelector}>Нужно ввести ключевое слово</span>
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
          isCheckedForShortFilms={isCheckedForShortFilms}
        />
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  handleSearchClick: PropTypes.func,
};
