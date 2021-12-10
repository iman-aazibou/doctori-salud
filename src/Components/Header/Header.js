import React from "react";

import "./Header.scss";

import HamburguerNav from "../UI/HamburguerNav/HamburguerNav";
import Nav from "./../Nav/Nav";
import Logo from "./../UI/Logo/Logo";
import Contact from "./../Contact/Contact";

const Header = () => {
  return (
    <div className="header">
      <HamburguerNav />
      <Logo />
      <Nav />
      <Contact />
    </div>
  );
};

export default Header;
