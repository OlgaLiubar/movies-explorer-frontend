/* eslint-disable react/prop-types */
import React from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import AuthForm from "../AuthForm/AuthForm";

export default function Login({
  onSubmit,
  isLoading,
  serverErrMsg,
  customErr,
  // resetServerError
  // setIsError
}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };

  // React.useEffect(() => () => {
  //   setIsError(false);
  // }, []);

  return (
    <AuthForm
      title="Рады видеть!"
      signUp={false}
      btnName="Войти"
      authQuestion="Ещё не зарегистрированы?"
      authLinkTxt="Регистрация"
      linkPath="/signup"
      onChangeInput={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
      isValid={isValid}
      isLoading={isLoading}
      values={values}
      serverErrMsg={serverErrMsg}
      customErr={customErr}
    />
  );
}
