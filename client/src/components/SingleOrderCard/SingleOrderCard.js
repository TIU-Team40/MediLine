import React, {useState} from "react";
import "./SingleOrderCard.css";
import "../../styles/global.css";
import OrderCards from "../OrderCards/OrderCards";

const SingleOrderCard = ({ data, address, disabled }) => {
  const {
    firstName,
    lastName,
    addressLine1,
    addressLine2,
    phoneNumber,
    pinCode,
    state,
  } = address;
  const [contactPharmacy, setContactPharmacy] = useState(false);
  return (
    <div className="single-order-container">
      <div className="single-order-header">
        <div className="single-order-header-content">
          <h3>Order Confirmed</h3>
          <p>
            <strong>Ordered on : </strong>10 June 2022
          </p>
          <p>
            <strong>Order ID:</strong> #62jfhaosjfhjoahfgj2
          </p>
          <p>
            <strong>Ordered from: </strong> Apollo Pharmacy
          </p>
          <p>
            <strong>Order status: </strong> <span> Shipped </span>
          </p>
          <h4>Order Summary: </h4>
        </div>
        {
          contactPharmacy ? 
        
          
          (
            <div className="contact-pharmacy" id={disabled}>
            <p>+91-786543820</p>
          </div>
          ) 
          :
          (
            

              <div className="contact-pharmacy" id={disabled}>
                <button type="button" onClick={()=>setContactPharmacy(true)}>Contact Pharmacy </button>
              </div>
                
          )
        }
      </div>
      <div className="single-order-wrapper">
        {data.slice(0, 3).map((products) => {
          return <OrderCards data={products} />;
        })}
      </div>
      <div className="single-order-user-details">
        <div className="single-order-address-wrapper">
          <h4>Order Address</h4>
          <h5>
            <span>{firstName}</span> <span>{lastName}</span>
          </h5>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <p>{pinCode}</p>
          <p>{state}</p>
          <p>
            <strong> Contact: </strong>
            {phoneNumber}
          </p>
        </div>

        <div className="single-order-price-wrapper">
          <h4>Price Details</h4>
          <p>Total Price: ₹200</p>
          <p>Discount Price: ₹200</p>
          <p>Shipping Price: ₹200</p>
          <div className="horizontal-bar"></div>
          <h4>Order Price: ₹800</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderCard;
