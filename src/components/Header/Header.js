import React from "react";
import PropTypes from "prop-types";
import headerLogo from "../../images/headerLogo.svg";
import NavLanding from "../NavLanding/NavLanding";
import NavMovies from "../NavMovies/NavMovies";

export default function Header({ headerDark, isPromo, handleBurgerClick }) {
  return (
    <header className={`header ${headerDark || ""}`}>
      <img src={headerLogo} alt="Movie" className="header__logo" />
      {isPromo ? (
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
