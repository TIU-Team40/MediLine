import React from "react";
import LocationFinder from "../LocationFinder/LocationFinder";
import SearchBar from "../SearchBar/SearchBar";
import "./HeroBanner.css";
import herobanner_illustration from "../../assets/herobanner_illustration.svg";
import "../../styles/global.css";

import { searchBarTest } from "../../dummy_data";
import { useAuth } from "../../context/Auth/AuthContext";
const HeroBanner = () => {
  const { medicineDisease } = useAuth();
  const medicineDiseaseArray = [
    ...medicineDisease.medicines,
    ...medicineDisease.diseases,
  ];
  return (
    <div className="herobanner-container">
      <header>
        <div className="location">
          <LocationFinder />
        </div>
        <div className="search-bar">
          <SearchBar
            placeholder="Search for diseases/medicine"
            data={medicineDiseaseArray}
          />
        </div>
      </header>
      <div className="hero-banner">
        <div className="welcome-header">
          <h1>
            WELCOME TO <span>MEDILINE</span> - THE ONLINE MEDICINE PROCUREMENT
            WEBSITE!
          </h1>

          <p>Order medicine from the comfort of your homes.</p>
        </div>
        <div className="illustration">
          <img src={herobanner_illustration} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
