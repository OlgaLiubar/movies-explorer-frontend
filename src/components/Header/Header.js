/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import headerLogo from "../../images/headerLogo.svg";
import NavLanding from "../NavLanding/NavLanding";
import NavMovies from "../NavMovies/NavMovies";

export default function Header({ headerDark, isLoggedIn, handleBurgerClick }) {
  return (
    <header className={`header ${headerDark || ""}`}>
      <img src={headerLogo} alt="Movie" className="header__logo" />
      {!isLoggedIn ? (
        <NavLanding />
      ) : (
        <NavMovies handleBurgerClick={handleBurgerClick} />
      )}
    </header>
  );
}

Header.propTypes = {
  headerDark: PropTypes.string,
  isPromo: PropTypes.bool,
  handleBurgerClick: PropTypes.func,
};
