import React from "react";
import classes from "./Card.module.css";
import "../../styles/global.css";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, imageUrl, description, price }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes.cardContainer}
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <img src={imageUrl} alt="medicine" />
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardTitle}>
            <h3>{title}</h3>
          </div>
          {/* <div className={classes.cardDescription}>{description}</div> */}
          <div className={classes.cardPrice}>₹{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
