import React from 'react'
import classes from './Services.module.css'

export default function Services() {
  return (
    <div className={classes.serviceContainer}>
      <h1 className={classes.h1}>OUR SERVICES</h1>
      <ul className={classes.ul}>
        <li>To provide an interface between the people and the pharmacies or shops</li>
        <br></br>
        <li>To provide easy procurement of medicine.</li>
        <br></br>
        <li>To allow people to purchase medicines from the comfort of their homes.</li>
        <br></br>
        <li>To make it easier for people to search for medicines by writing their symptoms.</li>
        <br></br>
        <li>To make it such that the shops can expand their business.</li>
        <br></br>
        <li>To make it so that shops can sell more.</li>
      </ul>
    </div>
  )
}
