import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

export default function Main() {
  return (
    <>
      <Header headerDark="header_dark" isPromo />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}
