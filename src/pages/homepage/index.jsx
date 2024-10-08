import React, { useState } from "react";
import "./index.css";
import NavigationBar from "../../components/navigationbar";
import MenuDrawer from "../../components/menuDrawer";

const HomePage = () => {
  const [showMenu, SetShowMenu] = useState(false);
  return (
    <div className="homePage">
      <NavigationBar showMenu={showMenu} SetShowMenu={SetShowMenu} />

      <div className="homepage__containner">
        <section className="section1">
          <MenuDrawer showMenu={showMenu} SetShowMenu={SetShowMenu} />
        </section>
        <section className="section2">2</section>
      </div>
    </div>
  );
};

export default HomePage;
