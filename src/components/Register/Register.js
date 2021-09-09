import React from "react";
import AuthForm from "../AuthForm/AuthForm";

export default function Login() {
  return (
    <AuthForm
      title="Добро пожаловать!"
      signUp={true}
      btnName="Зарегистрироваться"
      authQuestion="Уже зарегистрированы?"
      authLinkTxt="Войти"
      linkPath="/signin"
    />
  );
}
