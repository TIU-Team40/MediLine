import React from "react";
import { MdLocationPin } from "react-icons/md";
import "./LocationFinder.css";
import "../../styles/global.css";
import { useMedicine } from "../../context/Medicine/MedicineContext";

const LocationFinder = () => {
  const { currentLocation, setCurrentLocation } = useMedicine();
  return (
    <div className="location-container">
      <div className="location-name">
        <div className="location-icon">
          <MdLocationPin size="2rem" className="icon" />
        </div>

        <select
          className="select-location"
          value={currentLocation}
          onChange={(e) => {
            localStorage.setItem("location", e.target.value);
            setCurrentLocation(e.target.value);
          }}
        >
          <option className="select-location-option">Newtown</option>
          <option className="select-location-option">Saltlake</option>
          <option className="select-location-option">Bangur</option>
          <option className="select-location-option">Laketown</option>
        </select>
      </div>
    </div>
  );
};

export default LocationFinder;
