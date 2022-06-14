import React, { useState } from "react";
import "./LogIn.css";
import "../../styles/global.css";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import LogInModal from "../../components/LogInModal/LogInModal";
const LogIn = () => {
  const [userButton, setUserButton] = useState(false);
  const [shopOwnerButton, setShopOwnerButton] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="login-container">
      <div className="login-options">
        <div className="login-user-button">
          <button type="button" onClick={() => setUserButton(true)}>
            Login as a user
          </button>
        </div>
        {userButton && (
          <LogInModal
            heading="Log In as a user"
            type="user"
            setUserButton={setUserButton}
            setShopOwnerButton={setShopOwnerButton}
            link_to="/createanaccount"
          />
        )}

        <div className="login-shopowner-button">
          <button type="button" onClick={() => setShopOwnerButton(true)}>
            Login as a shop owner
          </button>
        </div>
        {shopOwnerButton && (
          <LogInModal
            heading="Log In as a shop owner"
            type="pharmacy"
            setShopOwnerButton={setShopOwnerButton}
            setUserButton={setUserButton}
            link_to="/createanaccountshop"
          />
        )}
        <div className="sign-in-option">
          <p>Don't have an account?</p>
          <p className="sign-in">
            <Link to="/createanaccount">
              <button type="button">Sign Up</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
