import React from "react";
import classes from "./LargeCard.module.css";
import '../../styles/global.css'
const LargeCard = ({ data }) => {
  return (
    <div className={classes.largeCardContainer}>
      {data.map(({ title, imageUrl, description, bigDescription, price }) => {
        return (
          <div className={classes.largeCardWrapper}>
            <div className={classes.largeCardImageWrapper}>
              <div className={classes.largeCardImage}>
                <img src={imageUrl} alt="product image" />
              </div>
            </div>
            <div className={classes.largeCardContent}>

            <div className={classes.largeCardTitle}><h3> {title}
                </h3> </div>
            <div className={classes.largeCardSmallDesc}>
                {description}
            </div>
            <div className={classes.largeCardDesc}>{bigDescription}</div>
                <div className={classes.largeCardPrice}>
                   <p> ₹{price}</p> 
                    </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LargeCard;
