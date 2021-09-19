/* eslint-disable react/prop-types */
import React from "react";
import handleServerError from "../../utils/handleServerError";
// import PropTypes from "prop-types";

export default function FormError({
  serverErrMsg,
  customErr,
}) {

   const error = handleServerError(serverErrMsg);
  //  console.log(serverErrMsg);
//    console.log(error);

  return (
    <span className="error">{error == 1 ? customErr : error}</span>
  );
}

// FormButton.propTypes = {
//   headerDark: PropTypes.string,
//   isPromo: PropTypes.bool,
//   handleBurgerClick: PropTypes.func,
// };
