/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import headerLogo from "../../images/headerLogo.svg";
import NavLanding from "../NavLanding/NavLanding";
import NavMovies from "../NavMovies/NavMovies";
import { Link } from 'react-router-dom';

export default function Header({ headerDark, loggedIn, handleBurgerClick }) {
  return (
    <header className={`header ${headerDark || ""}`}>
      <Link to="/">
      <img src={headerLogo} alt="Movie" className="header__logo" />
      </Link>
      {!loggedIn ? (
        <NavLanding/>
      ) : (
        <NavMovies handleBurgerClick={handleBurgerClick} />
      )}
    </header>
  );
}

Header.propTypes = {
  headerDark: PropTypes.string,
  handleBurgerClick: PropTypes.func,
};
