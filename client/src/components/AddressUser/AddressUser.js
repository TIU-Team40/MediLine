import React, { useState } from "react";
import "./AddressUser.css";
import "../../styles/global.css";
import AddNewAddress from "../AddNewAddress/AddNewAddress";
import { useAuth } from "../../context/Auth/AuthContext";
import { deleteAddress, setPrimaryAddress } from "../../networkCalls/userCalls";
const AddressUser = ({ info, otherAddresses, isPrimary, disabled }) => {
  const [editButton, setEditButton] = useState(false);
  const { userDispatch } = useAuth();
  
  async function setPrimaryAddressHandler() {
    userDispatch({ type: "SET_PRIMARY_ADDRESS", payload: info._id });
    await setPrimaryAddress(info._id);
  }

  async function removeAddressHandler() {
    if (isPrimary) {
      userDispatch({ type: "DELETE_ADDRESS", payload: info._id });
      if (otherAddresses.length > 0) {
        userDispatch({
          type: "SET_PRIMARY_ADDRESS",
          payload: otherAddresses[0]._id,
        });
        await setPrimaryAddress(otherAddresses[0]._id);
      }
      await deleteAddress(info._id);
    } else {
      userDispatch({ type: "DELETE_ADDRESS", payload: info._id });
      await deleteAddress(info._id);
    }
  }
  return (
    <div className="address-user-container">
      {/* <h3>{heading} </h3> */}
      <div className="user-address-cards ">
        <div className="user-address-content">
          <div className="user-address-name">
            <h4>
              <span>{info.name}</span>
            </h4>
          </div>
          <div className="user-address-address1">
            <span>Address: </span>
            {info.addressLine}
          </div>

          <div className="user-address-pincode">
            <span>Pincode : </span>
            {info.pinCode}
          </div>
          <div className="user-address-state">
            <span>State : </span>
            {info.state}
          </div>
          <div className="user-phone-number">
            <span>Contact : </span>
            {info.contactNo}
          </div>

          <div className="user-address-buttons">
            <button
              type="button"
              className="edit-button"
              onClick={() => setEditButton(true)}
            >
              {" "}
              Edit{" "}
            </button>
            <button
              type="button"
              className="remove-button-red"
              onClick={removeAddressHandler}
            >
              {" "}
              Remove{" "}
            </button>
            <div className="set-as-primary" id={disabled}>
              <button type="button" onClick={setPrimaryAddressHandler}>
                Set as primary
              </button>
            </div>
          </div>
        </div>
      </div>
      {editButton && (
        <AddNewAddress
          info={info}
          type="edit"
          setAddNewAddressButton={setEditButton}
        />
      )}
    </div>
  );
};

export default AddressUser;
