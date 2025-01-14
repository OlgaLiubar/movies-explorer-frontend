import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../../hooks/useForm";
// import Preloader from "../Preloader/Preloader";

export default function Register({
  onSubmit,
  isLoading,
  serverErrMsg,
  customErr,
  resetServerError,
}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };

  return (
    <>
      <AuthForm
        title="Добро пожаловать!"
        signUp={true}
        btnName="Зарегистрироваться"
        authQuestion="Уже зарегистрированы?"
        authLinkTxt="Войти"
        linkPath="/signin"
        onChangeInput={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
        isValid={isValid}
        isLoading={isLoading}
        serverErrMsg={serverErrMsg}
        customErr={customErr}
        resetServerError={resetServerError}
      />
    </>
  );
}
