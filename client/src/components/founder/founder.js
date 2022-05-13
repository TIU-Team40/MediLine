import React from "react";
import ayush from "./ayusj.jpg";
import nilankoor from "./nilankoor.jpg";
import aritra from "./aritra barik.jpg";
import rishab from "./rishab.jpg";
import aman from "./user.png"
import img from "./founder.css";

export default function Founder () {

    return(

        <div>

            <h1 className="Founders" > Founders </h1>
            <img className="img" src={nilankoor} alt="nilankoor" />
            <p className="p">Nilankoor Biswas</p>
            <p className="p">
                Co-founder(HEAD)
            </p>
           
            <img className="img" src={ayush} alt="ayusj" />
            <p className="p">Ayush Sharma</p>
            <p className="p">
                Co-founder(HEAD)
            </p>

           
            <img className = "img" src={aritra} alt="arita barik" />
            <p className="p">Aritra Barik</p>
            <p className="p">
                Co-founder(Partner)
            </p>
            <img className="img" src={rishab} alt="rishab" />
            <p className="p">Rishab Jain</p>
            <p className="p">
                Co-founder(Partner)
            </p>
            <img className="img" src={aman} alt="aman" />
            
            <p className="p">Aman Banka</p>
            <p className="p">
                Co-founder(Partner)
            </p>
            
        </div>
    )
}