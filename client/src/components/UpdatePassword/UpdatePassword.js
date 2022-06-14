import React from "react";
import "./UpdatePassword.css";
import "../../styles/global.css";
import { GrFormClose } from "react-icons/gr";
const UpdatePassword = ({ setUpdatePassword, setShopUpdatePassword }) => {
  
  return (
    <div className="up_edituserprofile-background">
      <div className="up_edituserprofile-wrapper">
        <div className="up_edituserprofile-header">
          <h1>Update Password: </h1>
          <GrFormClose
            size="2em"
            className="up_edituserprofile-close-icon"
            onClick={()=>{setUpdatePassword(false)}}
          />
        </div>

        <form action="/" className="up_edituser-form">
          <div className="up_edituser-form-container">
            <label htmlFor="old-password">Current Password: </label>
            <input type="password" />
          </div>
          <div className="up_edituser-form-container">
            <label htmlFor="new-password">New Password : </label>
            <input type="password" />
          </div>

          <div className="up_edituser-form-container">
            <label htmlFor="confirm-password">Confirm New Password : </label>
            <input type="password" />
          </div>
        </form>

        <div className="up_save-button">
          <button type="button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
