import React from "react";
import { Link } from "react-router-dom";

export default function NavLanding() {
  return (
    <ul className="nav-landing">
      <li className="nav-landing__btn">
        <Link to={`/signup`} className="nav-landing__register-btn">
          Регистрация
        </Link>
      </li>
      <li className="nav-landing__btn">
        <Link to={`/signin`} className="nav-landing__login-btn">
          Войти
        </Link>
      </li>
    </ul>
  );
}
