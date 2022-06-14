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
const Home = () => {
  const type = JSON.parse(localStorage.getItem("type"));
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
          {homepage_category.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div className={classes.cardCategory}>
                  <div className={classes.cardHeadTitle}>
                    <h1>{data.headTitle}</h1>

                    <p>
                      <a href="#">Show All</a>
                    </p>
                  </div>
                  <div className={classes.cardSection}>
                    {data.categoryArray.map((product) => {
                      return (
                        <Card
                          headTitle={product.headTitle}
                          title={product.title}
                          imageUrl={product.imageUrl}
                          description={product.description}
                          price={product.price}
                          key={product.headTitle}
                        />
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
