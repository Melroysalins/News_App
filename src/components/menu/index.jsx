import React from "react";
import { IoMenu } from "react-icons/io5";
import "./index.css";

const Menu = ({ showMenu, SetShowMenu }) => {
  return (
    <div>
      <IoMenu className="menuIcon" onClick={() => SetShowMenu(!showMenu)} />
    </div>
  );
};

export default Menu;
