import React from "react";

export default function FilterCheckbox() {
  function handleCheck() {
    console.log('checked');
  }
  return (
    <label className="checkbox">
      <input 
      className="checkbox__input" 
      type="checkbox" 
      onChange={handleCheck} 
      // checked={isShortfilm}
      />
      <span className="checkbox__input-visible" />
      Короткометражки
    </label>
  );
}
