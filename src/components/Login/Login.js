import React from "react";
import AuthForm from "../AuthForm/AuthForm";

export default function Login() {
  return (
    <AuthForm
      title="Рады видеть!"
      signUp={false}
      btnName="Войти"
      authQuestion="Ещё не зарегистрированы?"
      authLinkTxt="Регистрация"
      linkPath="/signup"
    />
  );
}
