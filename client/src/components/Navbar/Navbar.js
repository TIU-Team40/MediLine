import React from "react";
import "./Navbar.css";
import "../../styles/global.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import Notification from "../Notification/Notification";
import { dummy_notification } from "../../dummy_data";
import CartContext from "../../context/Cart/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isLoggedIn = true;
  const isShopowner = true;
  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const {  cartItems, totalItem } = useContext(CartContext);
  return (
    <>

      <nav className="main-nav">
        <div className="logo">
          <h3>
            <Link to="/">MediLine</Link>
          </h3>
        </div>

        <ul className="menu-link">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/cart">

  
            <div className="cart-block">
              <a href="/cart" className="cart-text">
                Cart
              </a>

              <span className="item-counter">{totalItem}</span>
            </div>
            </Link>
          </li>
          <li>
            <Link to="/consult">Consult</Link>
          </li>
        </ul>

        {!isLoggedIn ? (
          <div className="auth">
            <Link to='/login'>

            <button type="button" className="auth-btn">
              Log In
            </button>

            </Link>
          </div>
        ) : (
          <div className="user-icons">
            <div className="notification-bell">
              <BsBell
                size="1.7em"
                onClick={() => setNotificationOpen(!notificationOpen)}
              />
              <div className="counter">2</div>
              {notificationOpen && (
                <div className="notification-open">
                  <p>
                    <Notification ntf={dummy_notification} className="ntf" />
                  </p>
                </div>
              )}
            </div>
            <div className="user-logo">
              <FaUserCircle size="1.8em" onClick={() => setOpen(!open)} />
              {open && (
                <div className="user-logo-open">
                  <div className="user-logo-dropdown">
                    <Link to='/userprofile'>Profile</Link>
                    <Link to="/useraddress">Change Address</Link>
                    <Link to="/">Log Out</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

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
                {isLoggedIn ? (
                  <button
                    className="auth-btn-smallscreen"
                    type="button"
                    onClick={() => setToggleMenu(false)}
                  >
                    <BiUserCircle size="2rem" />
                    Hi, username
                  </button>
                ) : (
                  <Link to='/login'>

                  <button
                    className="auth-btn-smallscreen"
                    type="button"
                    onClick={() => setToggleMenu(false)}
                  >
                    <BiUserCircle size="2rem" />
                    Log In
                  </button>
                  </Link>
                )}
                <li>
                  <a href="/" onClick={() => setToggleMenu(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/orders" onClick={() => setToggleMenu(false)}>
                    Orders
                  </a>
                </li>
                <li>
                  <div className="cart-block">
                    <a
                      href="/cart"
                      className="cart-text"
                      onClick={() => setToggleMenu(false)}
                    >
                      Cart
                    </a>

                    <span className="item-counter">{cartItems.length}</span>
                  </div>
                </li>
                <li>
                  <a href="/consult" onClick={() => setToggleMenu(false)}>
                    Consult
                  </a>
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
