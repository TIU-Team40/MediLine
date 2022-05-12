import React from 'react'
import classes from './About.module.css'

export default function About() {
    return (
        <div className={classes.aboutContainer}>
            <h1 className={classes.h1}>ABOUT US</h1>
            <h2 className={classes.h2}>MediLine is a medicine procurement app</h2>
            <br></br>
            <p className={classes.p}>Our project aims to build a web application which will act as intermediate between the people and a medicine shop or pharmacy. This web application will allow users to order medicine online, from medicine shops in their close vicinity, from the comfort of their homes. This project aims to provide easy procurement of medicines for people who might not be able to step out of their homes for any reason. The medicines will be delivered to the people at their doorstep by a delivery man from the shop itself.</p>
            <br></br>
            <p className={classes.p}>Shopkeepers can also benefit from this service, since this will allow them to expand their sales, because this is an online platform. Payments can be done online by the users. Ordering medicines by uploading prescriptions will also be provided. Shopkeepers can update their inventory.</p>
        </div>
  )
}
