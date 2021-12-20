import React from "react";
import { Link } from "react-router-dom";
import FormButton from "../FormButton/FormButton";
import FormError from "../FormError/FormError";

export default function AuthForm({
  title,
  signUp,
  btnName,
  authQuestion,
  authLinkTxt,
  linkPath,
  onChangeInput,
  errors,
  values,
  isValid,
  onSubmit,
  serverErrMsg,
  customErr,
  resetServerError
}) {

  function hideError() {
    resetServerError()
  }
  return (
    <section className="auth">
      <Link to="/">
        <div className="auth__logo"></div>
      </Link>
      <h1 className="auth__title">{`${title}`}</h1>
      <form onSubmit={onSubmit} className="auth__form" noValidate>
        <fieldset className="auth__fieldset">
          {signUp && (
            <label className="auth__label">
              <p className="auth__input-name">Имя</p>
              <input
                className="auth__input"
                minLength={2}
                maxLength={30}
                type="text"
                name="name"
                onChange={onChangeInput}
                onFocus={hideError}
                required
              />
              <span className="auth__input-error" id="name-error">
                {errors.name || ""}
              </span>
            </label>
          )}
          <label className="auth__label">
            <p className="auth__input-name">E-mail</p>
            <input
              className="auth__input"
              type="email"
              name="email"
              required
              onChange={onChangeInput}
              onFocus={hideError}
            />
            <span className="auth__input-error" id="email-error">
              {errors.email || ""}
            </span>
          </label>
          <label className="auth__label">
            <p className="auth__input-name">Пароль</p>
            <input
              className={
                !errors.password ? "auth__input" : "auth__input auth__input_invalid"
              }
              minLength={8}
              type="password"
              name="password"
              onChange={onChangeInput}
              required
              onFocus={hideError}
            />
            <span className="auth__input-error" id="password-error">
              {errors.password || ""}
            </span>
          </label>
        </fieldset>
        <FormError serverErrMsg={serverErrMsg} customErr={customErr} />
        <FormButton btnName={btnName} isValid={isValid} values={values} />
      </form>
      <p className="auth__signed-up">
        {authQuestion}
        <Link to={linkPath} className="auth__link">
          {authLinkTxt}
        </Link>
      </p>
    </section>
  );
}
