/* eslint-disable react/prop-types */
import React from "react";

export default function FilterCheckbox({isShortFilm, handleCheck}) {
  return (
    <label className="checkbox">
      <input 
      className="checkbox__input" 
      type="checkbox" 
      onChange={handleCheck} 
      checked={isShortFilm} 
      />
      <span className="checkbox__input-visible" />
      Короткометражки
    </label>
  );
}
