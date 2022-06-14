import React, { useState } from "react";
import "./EditUserProfile.css";
import "../../styles/global.css";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { updateUserData } from "../../networkCalls/userCalls";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";
const EditUserProfile = ({ info, setEditDetails }) => {
  const [name, setName] = useState(info.name);
  const [email, setEmail] = useState(info.email);
  const [contactNo, setContactNo] = useState(info.contactNo);
  const navigate = useNavigate();
  const { userDispatch } = useAuth();

  async function saveHandler() {
    userDispatch({ type: "UPDATE_USER", payload: { name, email, contactNo } });
    await updateUserData({ name, email, contactNo });
    setEditDetails(false)
  }

  return (
    <div className="edituserprofile-background">
      <div className="edituserprofile-wrapper">
        <div className="edituserprofile-header">
          <h1>Change my details: </h1>
          <GrFormClose
            size="2em"
            className="edituserprofile-close-icon"
            onClick={() => setEditDetails(false)}
          />
        </div>

        <form className="edituser-form">
          <div className="edituser-form-container">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="edituser-form-container">
            <label htmlFor="phone">Contact number : </label>
            <input
              type="number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
          <div className="edituser-form-container ">
            <label htmlFor="email">Email ID : </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>

        <div className="save-button">
          <button type="button" onClick={saveHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
