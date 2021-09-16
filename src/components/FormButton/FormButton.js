/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";

export default function FormButton({ btnName, isValid, values, serverErrMsg }) {
  console.log(values);
  return (
    <>
      <span className="submit-btn__error">{serverErrMsg}</span>
      <button
        type="submit"
        value="Отправить"
        className={`submit-btn ${!isValid && "submit-btn_disabled"}`}
        disabled={!isValid}
      >
        {btnName}
      </button>
    </>
  );
}

// FormButton.propTypes = {
//   headerDark: PropTypes.string,
//   isPromo: PropTypes.bool,
//   handleBurgerClick: PropTypes.func,
// };
