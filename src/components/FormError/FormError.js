import React from "react";
import handleServerError from "../../utils/handleServerError";

export default function FormError({ serverErrMsg, customErr }) {
  const error = handleServerError(serverErrMsg);
  return <span className="error">{error == 1 ? customErr : error}</span>;
}
