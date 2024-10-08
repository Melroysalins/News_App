import React from "react";
import "./index.css";
import Menu from "../menu";
import Header from "../header";
import Login from "../login";

const NavigationBar = ({ showMenu, SetShowMenu }) => {
  return (
    <div className="navigation__containner">
      <Menu showMenu={showMenu} SetShowMenu={SetShowMenu} />
      <Header />
      <Login />
    </div>
  );
};

export default NavigationBar;
