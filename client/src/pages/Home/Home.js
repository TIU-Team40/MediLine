import React from "react";
import Card from "../../components/Card/Card";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MidCards from "../../components/MidCards/MidCards";
import classes from "./Home.module.css";
import ShopNotification from "../ShopOwner/ShopNotification/ShopNotification";
import { homepage_category } from "../../dummy_data";
import "../../styles/global.css";
import { useAuth } from "../../context/Auth/AuthContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import LocationFinder from "../../components/LocationFinder/LocationFinder";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const type = JSON.parse(localStorage.getItem("type"));
  const navigate = useNavigate();
  const isShopowner = type === "pharmacy";
  const { medicineDisease } = useAuth();
  const medicineDiseaseArray = [
    ...medicineDisease.medicines,
    ...medicineDisease.diseases,
  ];
  return (
    <div className="homeContainer">
      {isShopowner ? (
        <ShopNotification />
      ) : (
        <div>
          <header>
            <div className={classes.location}>
              <LocationFinder />
            </div>
            <div className={classes.searchBar}>
              <SearchBar
                placeholder="Search for diseases / medicine"
                data={medicineDiseaseArray}
              />
            </div>
          </header>
          <MidCards />
          <HeroBanner />
          <React.Fragment>
            <div className={classes.cardCategory}>
              <div className={classes.cardHeadTitle}>
                <h1>Recommended</h1>

                <p>
                  <div onClick={() => navigate("/products")}>Show All</div>
                </p>
              </div>
              <div className={classes.cardSection}>
                {medicineDisease.medicines.slice(13, 18).map((product) => {
                  return (
                    <Card
                      id={product._id}
                      headTitle={product.headTitle}
                      title={product.name}
                      imageUrl={product.picture}
                      description={product.description}
                      price={product.price}
                      key={product._id}
                    />
                  );
                })}
              </div>
            </div>
          </React.Fragment>
          <React.Fragment>
            <div className={classes.cardCategory}>
              <div className={classes.cardHeadTitle}>
                <h1>Seasonal Medicines</h1>

                <p>
                  <div onClick={() => navigate("/products")}>Show All</div>
                </p>
              </div>
              <div className={classes.cardSection}>
                {medicineDisease.medicines
                  .filter((medicine) => medicine.seasons[1] === "Monsoon")
                  .slice(0, 5)
                  .map((product) => {
                    return (
                      <Card
                        id={product._id}
                        headTitle={product.headTitle}
                        title={product.name}
                        imageUrl={product.picture}
                        description={product.description}
                        price={product.price}
                        key={product._id}
                      />
                    );
                  })}
              </div>
            </div>
          </React.Fragment>
          <React.Fragment>
            <div className={classes.cardCategory}>
              <div className={classes.cardHeadTitle}>
                <h1>New Arrivals</h1>

                <p>
                  <div onClick={() => navigate("/products")}>Show All</div>
                </p>
              </div>
              <div className={classes.cardSection}>
                {medicineDisease.medicines
                  .filter((medicine) => medicine.seasons[1] === "Monsoon")
                  .slice(8, 13)
                  .map((product) => {
                    return (
                      <Card
                        id={product._id}
                        headTitle={product.headTitle}
                        title={product.name}
                        imageUrl={product.picture}
                        description={product.description}
                        price={product.price}
                        key={product._id}
                      />
                    );
                  })}
              </div>
            </div>
          </React.Fragment>
        </div>
      )}
    </div>
  );
};

export default Home;
