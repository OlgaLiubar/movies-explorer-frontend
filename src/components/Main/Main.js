/* eslint-disable react/prop-types */
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

export default function Main({isLoggedIn}) {
  return (
    <>
      <Header 
      isLoggedIn={isLoggedIn} 
      headerDark="header_dark"  
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
