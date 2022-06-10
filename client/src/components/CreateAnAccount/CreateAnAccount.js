import React from "react";
import "../../styles/global.css";
import './CreateAnAccount.css'
import { CgClose } from "react-icons/cg";
import background_image_2 from '../../assets/background_image_2.jpg'
import { Link } from "react-router-dom";
const CreateAnAccount = ({ heading, footer, link_to }) => {
  
  return (
    <div className="caa_modal-background">
        <img src={background_image_2} alt="background_image" />
      <div className="caa_user-box">
        <div className="caa_header-stuff">
          <h3>{heading}</h3>
          <span>
            <Link to='/login'>

            <CgClose />
            </Link>
          </span>
        </div>

        <form className="caa_user-form">
            <input type="text" placeholder="Name" required/>
          <input type="text" placeholder=" E-mail ID" required />
          <input type="number" placeholder=" Phone Number" required />
          <input type="password" placeholder="Password" required />
          
          <input type="submit" value="Sign In" className="caa_user-submit" />
        </form>
       
       <Link to={link_to}>


       <div className="caa_shopowner">
           {footer}
       </div>
       </Link>
      </div>
    </div>
  );
};


export default CreateAnAccount