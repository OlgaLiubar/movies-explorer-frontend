/* eslint-disable react/prop-types */
import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../../hooks/useForm";
import Preloader from "../Preloader/Preloader";

export default function Register({ onSubmit, isLoading, serverErrMsg }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  // console.log(values)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(values)
    onSubmit(values);
  }
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
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
        />
      )}
    </>
  );
}
