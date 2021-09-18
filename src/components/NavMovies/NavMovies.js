import React from "react";
import { NavLink } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export default function NavMovies({ handleBurgerClick }) {
  const path = useLocation().pathname;

  return (
    <section className="nav-main ">
      <nav
        className={
          path === "/" ? "nav-main__visible_promo" : "nav-main__visible"
        }
      >
        <ul className="nav-main__list">
          <li className="nav-main__item">
            <NavLink
              to="/movies"
              className={
                path === "/" ? "nav-main__link_promo" : "nav-main__link"
              }
              activeClassName="nav-main__link_active"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="nav-main__item">
            <NavLink
              to="/saved-movies"
              className={
                path === "/" ? "nav-main__link_promo" : "nav-main__link"
              }
              activeClassName="nav-main__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <AccountButton />
      </nav>
      <div
        className={path === "/" ? "nav-main__burger_promo" : "nav-main__burger"}
        onClick={handleBurgerClick}
      ></div>
    </section>
  );
}

NavMovies.propTypes = {
  handleBurgerClick: PropTypes.func,
};
