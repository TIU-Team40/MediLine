import React, { useState } from "react";
import "./ShopProfile.css";
import "../../../styles/global.css";
import UpdatePassword from "../../../components/UpdatePassword/UpdatePassword";

const ShopProfile = ({ pharmacy }) => {
  const [updatePassword, setUpdatePassword] = useState(false);
  const [name, setName] = useState(pharmacy.name);
  const [email, setEmail] = useState(pharmacy.email);
  const [contactNo, setContactNo] = useState(pharmacy.contactNo);
  const [address, setAddress] = useState(pharmacy.address);
  const [pinCode, setPinCode] = useState(pharmacy.pinCode);
  return (
    <div className="shop-profile-container">
      {updatePassword && (
        <UpdatePassword setUpdatePassword={setUpdatePassword} />
      )}
      <h1>Profile</h1>
      <div className="shop-profile-wrapper">
        <h3>Update Profile Details: </h3>
        <div className="shop-profile-form">
          <form action="/" id="update_form">
            <label htmlFor="Name">Shop name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="number">Contact number: </label>
            <input
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <label htmlFor="email">Email ID: </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Name">Address Line: </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="Name">Pincode: </label>
            <input
              type="number"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </form>
          <div className="update-password-button">
            <button
              type="button"
              onClick={() => {
                setUpdatePassword(true);
              }}
            >
              Update Password
            </button>
          </div>
          <div className="save-button">
            <button type="button"> Save </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
