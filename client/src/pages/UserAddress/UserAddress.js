import React, { useState } from "react";
import "./UserAddress.css";
import "../../styles/global.css";
import AddressUser from "../../components/AddressUser/AddressUser";
import AddNewAddress from "../../components/AddNewAddress/AddNewAddress";
import { blank } from "../../dummy_data";
import { useAuth } from "../../context/Auth/AuthContext";
const UserAddress = ({ info }) => {
  const [addNewAddressButton, setAddNewAddressButton] = useState(false);
  const { userState } = useAuth();
  const primaryAddress = userState.addresses.find(
    (address) => address.isPrimary === true
  );
  const otherAddresses = userState.addresses.filter(
    (address) => address.isPrimary !== true
  );
  return (
    <div className="user-address-container">
      <h1>My Address</h1>
      <div className="user-address-wrapper">
        {primaryAddress && (
          <>
            <h3>Primary Address : </h3>
            <AddressUser
              info={primaryAddress}
              disabled="disabled"
              heading="Primary Address : "
              isPrimary={true}
              otherAddresses={otherAddresses}
            />
          </>
        )}
        <h3>Other Addresses : </h3>
        {otherAddresses.map((address) => {
          return (
            <AddressUser info={address} isPrimary={false} key={address._id} />
          );
        })}
      </div>
      <div
        className="add-new-address"
        onClick={() => setAddNewAddressButton(true)}
      >
        <button type="button">+ Add New Address</button>
      </div>
      {addNewAddressButton && (
        <AddNewAddress
          info={blank}
          type="new"
          setAddNewAddressButton={setAddNewAddressButton}
        />
      )}
    </div>
  );
};

export default UserAddress;
