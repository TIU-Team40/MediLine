import React, { useState } from "react";
import "./UpdatePassword.css";
import "../../styles/global.css";
import { GrFormClose } from "react-icons/gr";
import { updateUserPassowrd } from "../../networkCalls/userCalls";
const UpdatePassword = ({ setUpdatePassword, setShopUpdatePassword }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function updatePasswordHandler() {
    const res = await updateUserPassowrd(
      oldPassword,
      password,
      confirmPassword
    );
    if (res.success) setUpdatePassword(false);
    else setError(res.message);
  }

  return (
    <div className="up_edituserprofile-background">
      <div className="up_edituserprofile-wrapper">
        <div className="up_edituserprofile-header">
          <h1>Update Password: </h1>
          <GrFormClose
            size="2em"
            className="up_edituserprofile-close-icon"
            onClick={() => {
              setUpdatePassword(false);
            }}
          />
        </div>

        <form action="/" className="up_edituser-form">
          <div className="up_edituser-form-container">
            <label htmlFor="old-password">Current Password: </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="up_edituser-form-container">
            <label htmlFor="new-password">New Password : </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="up_edituser-form-container">
            <label htmlFor="confirm-password">Confirm New Password : </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </form>
        {error && (
          <h4 style={{ color: "red", textAlign: "center" }}>{error}</h4>
        )}
        <div className="up_save-button">
          <button type="button" onClick={updatePasswordHandler}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
