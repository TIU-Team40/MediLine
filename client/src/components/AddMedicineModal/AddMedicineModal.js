import React from "react";
import "./AddMedicineModal.css";
import "../../styles/global.css";
import { GrFormClose } from "react-icons/gr";
import SearchBar from "../SearchBar/SearchBar";
import { searchBarTest } from "../../dummy_data";
import LargeCard from "../LargeCard/LargeCard";
import CartQty from "../CartQty/CartQty";
import { useState } from "react";
import { useAuth } from "../../context/Auth/AuthContext";
import {
  addInventoryItem,
  updateInventoryItem,
} from "../../networkCalls/pharmacyCalls";
const AddMedicineModal = ({
  setAddMedicine,
  medicineType,
  setMedicineType,
}) => {
  const [amQuantity, setAmQuantity] = useState(
    medicineType ? medicineType.quantity : 1
  );
  const [error, setError] = useState("");
  const [price, setPrice] = useState(medicineType ? medicineType.price : 0);
  const [selectedMedicine, setSelectedMedicine] = useState(
    medicineType ? medicineType.medicine : ""
  );
  const { medicineDisease, pharmacyState, pharmacyDispatch } = useAuth();
  const handleIncrement = () => {
    setAmQuantity((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (amQuantity >= 2) {
      setAmQuantity((prevCount) => prevCount - 1);
    } else {
      setAmQuantity((prevCount) => prevCount + 0);
    }
  };
  
  async function addMedicineHandler() {
    if (
      pharmacyState.inventory.find(
        (item) => item.medicine._id === selectedMedicine._id
      )
    ) {
      setError("Already In Inventory");
      return;
    }
    pharmacyDispatch({
      type: "ADD_TO_INVENTORY",
      payload: { medicine: selectedMedicine, quantity: amQuantity, price },
    });
    setAddMedicine(false);
    setMedicineType("");
    setError("");
    await addInventoryItem(selectedMedicine._id, amQuantity, price);
  }

  async function editMedicineHandler() {
    pharmacyDispatch({
      type: "UPDATE_INVENTORY",
      payload: {
        medicineId: selectedMedicine._id,
        quantity: amQuantity,
        price,
      },
    });
    setAddMedicine(false);
    setMedicineType("");
    await updateInventoryItem(selectedMedicine._id, amQuantity, price);
  }
  return (
    <div className="am_modal-background">
      <div className="am_edituserprofile-wrapper">
        <div className="am_edituserprofile-header">
          {medicineType === "" ? (
            <h1>Add Medicine </h1>
          ) : (
            <h1>Edit Medicine </h1>
          )}
          <GrFormClose
            size="2em"
            className="am_edituserprofile-close-icon"
            onClick={() => {
              setAddMedicine(false);
              setMedicineType("");
              setError("");
            }}
          />
        </div>
        <div className="am_content-wrapper">
          {medicineType === "" && (
            <SearchBar
              placeholder="Search for a medicine..."
              data={medicineDisease.medicines}
              setSelectedMedicine={setSelectedMedicine}
              setPrice={setPrice}
            />
          )}
          {selectedMedicine !== "" && <LargeCard data={selectedMedicine} />}
          {selectedMedicine !== "" && (
            <div className="am_select-quantity-and-price">
              <div className="am_select-quantity">
                <h3>Select Quantity to Add:</h3>
                <div className="am_quantity-div">
                  <div className="am_decrement">
                    <button type="button" onClick={handleDecrement}>
                      -
                    </button>
                  </div>
                  <div className="am_quantity">{amQuantity}</div>
                  <div className="am_increment">
                    <button type="button" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="am_select-price">
                <h3>Select Price Per Quantity: </h3>
                <span>₹ </span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          )}
          {medicineType === "" && error && (
            <h4 style={{ color: "red", textAlign: "center" }}>{error}</h4>
          )}
          <div className="add-medicine-button">
            {medicineType === "" ? (
              <button type="button" onClick={addMedicineHandler}>
                {" "}
                Add Medicine{" "}
              </button>
            ) : (
              <button type="button" onClick={editMedicineHandler}>
                {" "}
                Edit Medicine{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicineModal;
