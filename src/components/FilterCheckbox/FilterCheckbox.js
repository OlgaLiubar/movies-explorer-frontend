/* eslint-disable react/prop-types */
import React from "react";

export default function FilterCheckbox({ handleCheck, isShortFilms }) {

  function handleChange() {
    handleCheck();
  }

const checkboxActive = isShortFilms ? 'checkbox__input-visible_checked' : 'checkbox__input-visible';
  return (
    <label className="checkbox" htmlFor="filtercheckbox">
      <input 
      className="checkbox__input" 
      type="checkbox" 
      onChange={handleChange} 
      checked={isShortFilms}
      id="filtercheckbox" 
      />
      <span className={checkboxActive} />
      Короткометражки
    </label>
  );
}
