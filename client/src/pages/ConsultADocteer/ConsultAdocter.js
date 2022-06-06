import React from "react";
import { Link } from "react-router-dom";
import '../../styles/global.css';
import classes from './ConsultAdocter.css';
import img from './docterss.jpeg';

export default function Consultadocter(){
    return(
    <div>
      
    <h2 className={classes.heading}>Consult a Docter!</h2>
    <p className = {classes.hello}> Hello Username ! <br>
    </br>Consult with docter online and get diagnosed </p> 
    <textarea className = {classes.aa}  placeholder = "Write about your symptoms" /> 
    <img src  ={img} className = {classes.img} alt ="docterss" /> 
    <form>
      
      <input className ={classes.button} type = "submit" value = "Consult" />
      </form>    
  </div>
);

        


}