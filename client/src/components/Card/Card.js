import React from 'react'
import classes from './Card.module.css'
import '../../styles/global.css'

const Card = ({headTitle, title, imageUrl,description, price}) => {
  return (
        
        <div className={classes.cardContainer}>
            <div className={classes.card}>

            <div className={classes.cardImage}>
                <img src={imageUrl} alt="medicine" />
            </div>
            <div className={classes.cardContent}>
                <div className={classes.cardTitle}>
                    <h3>{title}</h3>
                </div>
                <div className={classes.cardDescription}>
                    {description}
                </div>
                <div className={classes.cardPrice}>
                 ₹{price}
                </div>
            </div>
            </div>
        </div>
      
  )
}

export default Card