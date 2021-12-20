import React from "react";

export default function FormButton({ btnName, isValid, isError }) {
  return (
    <>
      <button
        type="submit"
        value="Отправить"
        className={`submit-btn ${
          (!isValid || isError) && "submit-btn_disabled"
        }`}
        disabled={!isValid || isError}
      >
        {btnName}
      </button>
    </>
  );
}
