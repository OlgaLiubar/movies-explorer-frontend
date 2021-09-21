/* eslint-disable react/prop-types */
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

import Header from "../Header/Header";
import PropTypes from "prop-types";
import Preloader from "../Preloader/Preloader";
import FormButton from "../FormButton/FormButton";
import FormError from "../FormError/FormError";

export default function Profile({
  handleBurgerClick,
  handleLogOut,
  handleUpdateUser,
  isLoading,
  loggedIn,
  customErr,
  serverErrMsg,
  isError,
  resetServerError,
  successMsg,
}) {
  const [isInputDisabled, setIsInputDisabled] = React.useState(true);
  const { name, email } = React.useContext(CurrentUserContext);
  const {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
  } = useFormWithValidation();

  React.useEffect(() => {
    setValues({
      name,
      email,
    });
  }, [name, email]);

  React.useEffect(() => {
    resetServerError();
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateUser(values);
    setIsInputDisabled(true);
  }

  function toggleInput() {
    setIsInputDisabled(!isInputDisabled);
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
        <Header handleBurgerClick={handleBurgerClick} loggedIn={loggedIn} />
        <section className="profile">
          <h1 className="profile__title">{`Привет, ${name}!`}</h1>
          <p className="profile__success">{successMsg || ""}</p>
          <form
            className="profile__form"
            name="profile"
            onSubmit={handleSubmit}
            noValidate
          >
            {isLoading ? (
              <Preloader />
            ) : (
              <>
                <div className="profile__inputs">
                  <label className="profile__label">
                    <span className="profile__input-title">Имя</span>
                    <input
                      type="text"
                      name="name"
                      id="name-input"
                      className="profile__input"
                      minLength={2}
                      maxLength={30}
                      required
                      value={values.name || ""}
                      onChange={handleChange}
                      disabled={isInputDisabled}
                    />
                  </label>
                  <span className="profile__input-error">
                    {errors.name || ""}
                  </span>
                  <label className="profile__label">
                    <span className="profile__input-title">E-mail</span>
                    <input
                      type="email"
                      name="email"
                      className="profile__input"
                      id="email-input"
                      required
                      disabled={isInputDisabled}
                      value={values.email || ""}
                      onChange={handleChange}
                    />
                  </label>
                  <span className="profile__input-error">
                    {errors.email || ""}
                  </span>
                </div>

                {values.name === name && values.email === email ? (
                  <div className="profile__edit-group">
                    <button
                      type="button"
                      value="Edit"
                      className={`profile__submit-btn ${
                        isInputDisabled ? "" : "profile__submit-btn_clicked"
                      }`}
                      onClick={toggleInput}
                    >
                      Редактировать
                    </button>
                    <button
                      type="button"
                      className="profile__signout-btn"
                      value="Signout"
                      onClick={handleLogOut}
                    >
                      Выйти из аккаунта
                    </button>
                  </div>
                ) : (
                  <>
                    <FormError
                      serverErrMsg={serverErrMsg}
                      customErr={customErr}
                    />
                    <FormButton
                      btnName="Сохранить"
                      isError={isError}
                      isValid={isValid}
                    />
                  </>
                )}
              </>
            )}
          </form>
        </section>
        </>
      )}
    </>
  );
}

Profile.propTypes = {
  handleBurgerClick: PropTypes.func,
};
