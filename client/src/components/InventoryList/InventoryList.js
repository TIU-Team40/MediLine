import React from "react";
import "./InventoryList.css";
import "../../styles/global.css";
const InventoryList = ({ data, setAddMedicine }) => {
  return (
    <div className="inventory-list-container">
      <div className="inventory-list-header">
        <h3>Added Medicines:</h3>
      </div>
      <div className="inventory-list-wrapper">
        {data.slice(0, 3).map((data) => {
          return (
            <>
              <div className="inventory-list-items">
                <div className="medicine-image-wrapper">
                  <img src={data.imageUrl} alt="product image" />
                </div>
                <div className="medicine-content">
                    <div className="medicine-text-info">

                  <div className="medicine-title">{data.title}</div>
                  <div className="medicine-desc">{data.description}</div>
                  <div className="medicine-price">
                    <strong>Price:</strong> ₹{data.price}
                  </div>
                    </div>
                  <div className="medicine-buttons">
                    <button type="button" className="edit-price-button" onClick={()=>setAddMedicine(true)}>Edit Price</button>
                    <button type="button" className="remove-button">Remove Medicine</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryList;
