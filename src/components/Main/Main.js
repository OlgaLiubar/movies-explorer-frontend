/* eslint-disable react/prop-types */
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

export default function Main({loggedIn}) {
  return (
    <>
      <Header 
      loggedIn={loggedIn} 
      headerDark="header_dark"
      isPromo="nav-landing__btn_promo"
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}
