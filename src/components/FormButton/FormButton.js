/* eslint-disable react/prop-types */
import React from "react";
// import handleServerError from "../../utils/handleServerError";
// import PropTypes from "prop-types";

export default function FormButton({ btnName, isValid, isError }) {

//  const error = handleServerError(serverErrMsg);
// //  console.log(serverErrMsg);
//  console.log(error);
console.log(isError)

  return (
    <>
      {/* <span className="submit-btn__error">{error == 1 ? customErr : error}</span> */}
      <button
        type="submit"
        value="Отправить"
        className={`submit-btn ${!isValid || isError && "submit-btn_disabled"}`}
        disabled={!isValid || isError}
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
