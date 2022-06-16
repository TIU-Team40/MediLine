import React from "react";
import "./InventoryList.css";
import "../../styles/global.css";
import { useAuth } from "../../context/Auth/AuthContext";
import { deleteInventoryItem } from "../../networkCalls/pharmacyCalls";
const InventoryList = ({ inventoryData, setAddMedicine, setMedicineType }) => {
  const { pharmacyDispatch } = useAuth();
  async function removeMedicineHandler(itemId) {
    pharmacyDispatch({ type: "REMOVE_FROM_INVENTORY", payload: itemId });
    await deleteInventoryItem(itemId);
  }
  return (
    <div className="inventory-list-container">
      <div className="inventory-list-header">
        {inventoryData.length > 0 && <h3>Added Medicines:</h3>}
      </div>
      <div className="inventory-list-wrapper">
        {inventoryData.map((data) => {
          const { medicine, quantity, price } = data;
          return (
            <React.Fragment key={data.medicine._id}>
              <div className="inventory-list-items">
                <div className="medicine-image-wrapper">
                  <img src={medicine.picture} alt="product image" />
                </div>
                <div className="medicine-content">
                  <div className="medicine-text-info">
                    <div className="medicine-title">{medicine.name}</div>
                    <div className="medicine-desc">{medicine.description}</div>
                    <div className="medicine-price">
                      <strong>Quantity:</strong> {quantity}
                    </div>
                    <div className="medicine-price">
                      <strong>Price:</strong> ₹{price}
                    </div>
                  </div>
                  <div className="medicine-buttons">
                    <button
                      type="button"
                      className="edit-price-button"
                      onClick={() => {
                        setAddMedicine(true);
                        setMedicineType(data);
                      }}
                    >
                      Edit Price
                    </button>
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => removeMedicineHandler(medicine._id)}
                    >
                      Remove Medicine
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryList;
