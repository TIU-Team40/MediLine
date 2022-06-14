import React, { useContext, useState } from "react";
import "./UserProfile.css";
import "../../styles/global.css";
import CartContext from "../../context/Cart/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import EditUserProfile from "../../components/EditUserProfile/EditUserProfile";
import UpdatePassword from "../../components/UpdatePassword/UpdatePassword";
import { useAuth } from "../../context/Auth/AuthContext";
import { logout } from "../../networkCalls/userCalls";
const UserProfile = ({ info }) => {
  const [editDetails, setEditDetails] = useState(false);
  const navigate = useNavigate();
  const { userState, userDispatch, setNetworkLoader } = useAuth();
  const { name, contactNo, email } = userState;
  const [updatePassword, setUpdatePassword] = useState(false);

  async function logoutHandler() {
    setNetworkLoader(true);
    await logout();
    setNetworkLoader(false);
    userDispatch({ type: "END_USER_SESSION" });
    navigate("/", { replace: "true" });
  }
  return (
    <div className="userprofile-container">
      {editDetails && (
        <EditUserProfile info={userState} setEditDetails={setEditDetails} />
      )}
      {updatePassword && (
        <UpdatePassword setUpdatePassword={setUpdatePassword} />
      )}
      <div className="user-profile-header">
        <h1>My Profile</h1>
      </div>
      <div className="user-profile-outer">
        <div className="userprofile-wrapper">
          <div className="user-icon">
            <FaUserCircle className="user-icon-icon" />
          </div>
          <div className="user-content">
            <div className="user-name">
              <p>
                Name: <span>{name}</span>
              </p>
            </div>
            <div className="user-email">
              <p>
                Email ID: <span>{email}</span>
              </p>
            </div>
            <div className="user-phone">
              <p>
                Phone Number: <span>{contactNo}</span>
              </p>
            </div>
            <div className="user-cartLength">
              <p>
                Item(s) in Cart: <span>{userState.cart.length}</span>
              </p>
            </div>
            <div className="all-buttons">
              <div className="update-button">
                <button type="button" onClick={() => setEditDetails(true)}>
                  Edit Details
                </button>

                <Link to="/useraddress">
                  <button type="button">Edit Address</button>
                </Link>
              </div>
              <div className="update-password-button">
                <button type="button" onClick={() => setUpdatePassword(true)}>
                  Update Password
                </button>
              </div>
              <div className="logout-button">
                <button type="button" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
