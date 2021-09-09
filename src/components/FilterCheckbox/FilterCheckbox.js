import React from "react";

export default function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__input-visible" />
      Короткометражки
    </label>
  );
}
