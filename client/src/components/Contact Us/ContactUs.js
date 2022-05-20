import React from "react";
import className from "./ContactUS.css";
import location from "./location.jpg";
export default function ContactUs() {
  return (
    <div>
      <body>
        <h1 className="Contactus">Contact Us</h1>
        <p className="content">
          {" "}
          Hello User, We are here to answer your every query .If you want to
          reach us either you can email us on{" "}
        </p>
        <p className="content">
          {" "}
          Customer care email-id given below or you can call us at our Customer
          Care which is 24 x 7 available for you.{" "}
        </p>
        <p className="email">Email id : medilineforyou@MediLine.com;</p>
        <p className="number">Customer Care number : 18110010101</p>

        <h1 className="Contactus"> Our Location </h1>
        <img src={location} alt="location" />
      </body>
    </div>
  );
}
