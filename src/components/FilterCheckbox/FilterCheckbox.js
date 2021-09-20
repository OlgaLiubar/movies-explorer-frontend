/* eslint-disable react/prop-types */
import React from "react";

export default function FilterCheckbox({ handleCheck, isCheckedForShortFilms}) {

const checkboxActive = isCheckedForShortFilms ? 'checkbox__input-visible_checked' : 'checkbox__input-visible';
  return (
    <label className="checkbox" htmlFor="filtercheckbox">
      <input 
      className="checkbox__input" 
      type="checkbox" 
      onChange={handleCheck} 
      checked={isCheckedForShortFilms}
      id="filtercheckbox" 
      />
      <span className={checkboxActive} />
      Короткометражки
    </label>
  );
}
