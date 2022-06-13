import React from "react";
import "./SelectShop.css";
import "../../styles/global.css";
import ShopCards from "../../components/ShopCards/ShopCards";
import LocationFinder from "../../components/LocationFinder/LocationFinder";
import { useMedicine } from "../../context/Medicine/MedicineContext";
const SelectShop = () => {
  const { currentPharmacies } = useMedicine();
  return (
    <div className="select-shop-container">
      <div className="select-shop-heading">
        <LocationFinder />
        <h1>Select any pharmacy: </h1>
      </div>
      {currentPharmacies.map((shop) => {
        return (
          <>
            <ShopCards data={shop} />
          </>
        );
      })}
    </div>
  );
};

export default SelectShop;
