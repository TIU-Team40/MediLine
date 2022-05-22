import React from "react";
import "./Navbar.css";
import "../../styles/global.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {BiUserCircle} from 'react-icons/bi'
import { useState } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h3>
            <a href="/">MediLine</a>
          </h3>
        </div>
        
          <ul className="menu-link">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/consult">Consult</a>
            </li>
          </ul>
       
        <div className="auth">
          <span>Sign In</span>
          <button type="button" className="auth-btn">
            Sign Up
          </button>
        </div>

        <div className="smallscreen">
          <GiHamburgerMenu size="1.5rem" onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="smallscreen-overlay flex-center slide-bottom">
              <GrClose
                size="2rem"
                className="overlay-close"
                onClick={() => setToggleMenu(false)}
              />

              <ul className="menu-link-smallscreen">
              <button className="auth-btn-smallscreen" type="button" onClick={() => setToggleMenu(false)}>
                  <BiUserCircle size="2rem"/> 
                 
                  Sign In | Sign Up
              </button>
                <li>
                  <a href="/" onClick={() => setToggleMenu(false)}>Home</a>
                </li>
                <li>
                  <a href="/orders" onClick={() => setToggleMenu(false)}>Orders</a>
                </li>
                <li>
                  <a href="/cart" onClick={() => setToggleMenu(false)}>Cart</a>
                </li>
                <li>
                  <a href="/consult" onClick={() => setToggleMenu(false)}>Consult</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
