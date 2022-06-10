import React from "react";
import Card from "../../components/Card/Card";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MidCards from "../../components/MidCards/MidCards";
import classes from "./Home.module.css";
import { homepage_category } from "../../dummy_data";
import '../../styles/global.css'


const Home = () => {
  
  const isShopowner = true;

  return (
   
    <div>
      <HeroBanner />
       <MidCards />
      {homepage_category.map((data) => {
        return (
          <>
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
                    />
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
