import React from "react";
import "./LogInModal.css";
import "../../styles/global.css";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import background_first_page_1080p from '../../assets/background_first_page_1080p.jpg'
const LogInModal = ({ heading, setUserButton, setShopOwnerButton, link_to }) => {
  const handleClose = () => {
    setUserButton(false);
    setShopOwnerButton(false);
  };
  return (
    <div className="modal-background">
        <img src={background_first_page_1080p} alt="background_image" />
      <div className="user-box">
        <div className="header-stuff">
          <h3>{heading}</h3>
          <span onClick={handleClose}>
            <CgClose />
          </span>
        </div>

        <form className="user-form">
          <input type="text" placeholder="Enter your e-mail" />
          <input type="password" placeholder="Enter your password" />
          <input type="submit" value="Log In" className="user-submit" />
        </form>
        <div className="create-an-account">
            <h5>Don't have an account? <Link to = {link_to}>Create an account</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
