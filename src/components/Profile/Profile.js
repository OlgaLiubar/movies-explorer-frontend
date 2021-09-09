import React from "react";
import Header from "../Header/Header";
import PropTypes from "prop-types";

export default function Profile({ handleBurgerClick }) {
  const user = {
    name: "Андрей",
    email: "andrey@mail.ru",
  };
  return (
    <>
      <Header handleBurgerClick={handleBurgerClick} />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>
        <form action="#" className="profile__form">
          <div className="profile__inputs">
            <label className="profile__label">
              <span className="profile__input-title">Имя</span>
              <input
                type="text"
                name="name"
                className="profile__input"
                minLength={2}
                maxLength={30}
                required
                placeholder={user.name}
              />
            </label>

            <label className="profile__label">
              <span className="profile__input-title">E-mail</span>
              <input
                type="email"
                name="email"
                className="profile__input"
                required
                placeholder={user.email}
              />
            </label>
          </div>
          <button type="submit" value="Submit" className="profile__submit-btn">
            Редактировать
          </button>
          <button
            type="button"
            className="profile__signout-btn"
            value="Signout"
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

Profile.propTypes = {
  handleBurgerClick: PropTypes.func,
};
