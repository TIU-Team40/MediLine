import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NavbarSwitcher.css";
import "../../styles/global.css";
import ShopNavbar from "../ShopNavbar/ShopNavbar";

const NavbarSwitcher = () => {
  const type = JSON.parse(localStorage.getItem("type"));
  const isShopowner = type === "pharmacy";
  return (
    <div className="navbar-switcher-container">
      {isShopowner ? <ShopNavbar /> : <Navbar />}
    </div>
  );
};

export default NavbarSwitcher;
