import React from 'react'
import classes from './ProductPageCard.module.css'
import '../../styles/global.css'

const ProductPageCard = ({product}) => {
  return (
        
        <div className={classes.cardContainer}>
            <div className={classes.card}>

            <div className={classes.cardImage}>
                <img src={product.imageUrl} alt="medicine" />
            </div>
            <div className={classes.cardContent}>
                <div className={classes.cardTitle}>
                    <h3>{product.title}</h3>
                </div>
                <div className={classes.cardDescription}>
                    {product.description}
                </div>
                <div className={classes.cardPrice}>
                 ₹{product.price}
                </div>
            </div>
            </div>
        </div>
      
  )
}

export default ProductPageCard;