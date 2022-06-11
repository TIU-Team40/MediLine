import React from "react";
import "./ShopNavbar.css";
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
const ShopNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isLoggedIn = true;
  
  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const {  cartItems, totalItem } = useContext(CartContext);
  return (
    

      <nav className="main-nav">

      
        <div className="logo">
          <h3>
            <Link to="/shopnotification">MediLine</Link>
          </h3>
        </div>

        <ul className="menu-link">
          <li>
             <Link to='/shopnotification'>Notification</Link>
          </li>
          <li>
            <Link to="/shopinventory">Inventory</Link>
          </li>
          <li>
            <Link to="/shoporders">
                Orders
           
            </Link>
          </li>
         
        </ul>

       
          
     
          <div className="user-icons">
           
            <div className="user-logo">
              <FaUserCircle size="1.8em" onClick={() => setOpen(!open)} />
              {open && (
                <div className="user-logo-open">
                  <div className="user-logo-dropdown">
                    <Link to='/shopprofile'>Profile</Link>
                    
                    <Link to="/">Log Out</Link>
                  </div>
                </div>
              )}
            </div>
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
                
                  <button
                    className="auth-btn-smallscreen"
                    type="button"
                    onClick={() => setToggleMenu(false)}
                  >
                    <BiUserCircle size="2rem" />
                    Hi, username
                  </button>
               
               
                <li>
                  <Link to="/shopnotification" onClick={() => setToggleMenu(false)}>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link to="/shopinventory" onClick={() => setToggleMenu(false)}>
                    Inventory
                  </Link>
                </li>
                <li>
                 <Link to='/shoporders'>Orders</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
   
  );
};

export default ShopNavbar;
