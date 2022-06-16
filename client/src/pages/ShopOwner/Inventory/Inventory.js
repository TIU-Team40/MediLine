import React, { useState } from "react";
import "./Inventory.css";
import "../../../styles/global.css";
import { searchBarTest } from "../../../dummy_data";
import AddMedicineModal from "../../../components/AddMedicineModal/AddMedicineModal";
import InventoryList from "../../../components/InventoryList/InventoryList";
import { useAuth } from "../../../context/Auth/AuthContext";
const Inventory = () => {
  const [addMedicine, setAddMedicine] = useState(false);
  const [medicineType, setMedicineType] = useState("");
  const isInventoryEmpty = false;
  const { pharmacyState, pharmacyDispatch } = useAuth();
  console.log(pharmacyState);
  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <h1>Inventory</h1>
      </div>
      <div className="inventory-wrapper">
        <div className="inventory-add-medicine">
          <button type="button" onClick={() => setAddMedicine(true)}>
            + Add Medicine
          </button>
        </div>

        <InventoryList
          inventoryData={pharmacyState.inventory}
          setAddMedicine={setAddMedicine}
          setMedicineType={setMedicineType}
        />
      </div>
      {addMedicine && (
        <AddMedicineModal
          setAddMedicine={setAddMedicine}
          medicineType={medicineType}
          setMedicineType={setMedicineType}
        />
      )}
    </div>
  );
};

export default Inventory;
