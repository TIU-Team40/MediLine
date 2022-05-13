import React from "react";
import className from  "./ContactUS.css"
import location from "./location.jpg"
export default function Contact ()
{
    return(
        <div>
        <body>
            <h1 className="Contactus">Contact Us</h1>
            <p className="content"> Hello User, We are here to answer your every queries .To reach us either  
                 you can email us on our </p><p className="content"> email-id  or even call us at our 
                Customer Care number. We are 24 x 7 available for you. </p>
                <p className="email">
                Email id :  medilineforyou@MediLine.com;
                </p>
                <p className="email">
                Phone-number : 18110010101
                  </p>

                <h1 className="Contactus"> Our Location </h1>
                <img src={location} alt ="location" />
                
                <p className="email" >Headquatered :Sector-V, Kolkata</p> 
                    </body>

        </div>
        
    
    )
} 