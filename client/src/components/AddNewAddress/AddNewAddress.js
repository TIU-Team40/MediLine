import React, { useState } from "react";
import "./AddNewAddress.css";
import "../../styles/global.css";
import { GrFormClose } from "react-icons/gr";
import { useAuth } from "../../context/Auth/AuthContext";
import { addAddress, editAddress } from "../../networkCalls/userCalls";

const AddNewAddress = ({ info, setAddNewAddressButton, type }) => {
  const [name, setName] = useState(type === "edit" ? info.name : "");
  const [addressLine, setAddressLine] = useState(
    type === "edit" ? info.addressLine : ""
  );
  const [city, setCity] = useState(type === "edit" ? info.city : "");
  const [pinCode, setPinCode] = useState(type === "edit" ? info.pinCode : "");
  const [state, setState] = useState(type === "edit" ? info.state : "");
  const [contactNo, setContactNo] = useState(
    type === "edit" ? info.contactNo : ""
  );
  const { userState, userDispatch } = useAuth();

  async function addressHandler() {
    const addressId = info._id;
    if (type === "edit") {
      userDispatch({
        type: "EDIT_ADDRESS",
        payload: {
          addressId,
          address: {
            name,
            addressLine,
            city,
            pinCode,
            state,
            contactNo,
            user: userState,
          },
        },
      });
      await editAddress(
        addressId,
        name,
        addressLine,
        city,
        state,
        pinCode,
        contactNo
      );
    } else {
      const res = await addAddress(
        name,
        addressLine,
        city,
        state,
        pinCode,
        contactNo
      );
      console.log(res.address);
      userDispatch({
        type: "ADD_TO_ADDRESS",
        payload: res.address,
      });
    }
    setAddNewAddressButton(false);
  }
  return (
    <div className="ana_edituserprofile-background">
      <div className="ana_edituserprofile-wrapper">
        <div className="ana_edituserprofile-header">
          <h1>
            {type === "edit" ? <>Edit my address: </> : <>Add new address: </>}
          </h1>
          <GrFormClose
            size="2em"
            className="ana_edituserprofile-close-icon"
            onClick={() => setAddNewAddressButton(false)}
          />
        </div>

        <form action="/" className="ana_edituser-form">
          <div className="ana_edituser-form-container">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="ana_edituser-form-container">
            <label htmlFor="addressLine1">Address : </label>
            <input
              type="text"
              value={addressLine}
              onChange={(e) => setAddressLine(e.target.value)}
            />
          </div>
          <div className="ana_edituser-form-container">
            <label htmlFor="city">City : </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="ana_edituser-form-container ">
            <label htmlFor="pincode">Pincode : </label>
            <input
              type="pincode"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div className="ana_edituser-form-container">
            <label htmlFor="state">State : </label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="ana_edituser-form-container">
            <label htmlFor="phone">Phone : </label>
            <input
              type="number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
        </form>

        <div className="ana_save-button">
          <button type="button" onClick={addressHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
