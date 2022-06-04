import React from 'react'
import './MidCards.css'
import '../../styles/global.css'
import medicine_vector from '../../assets/medicine_vector.svg'
import rx_vector from '../../assets/rx_vector.svg'
import shop_vector from '../../assets/shop_vector.svg'
import {Link} from 'react-router-dom'
const MidCards = () => {
  return (
    <div className="midcards-container">
      
         <Link to='/products'>
        <div className="cards" onClick="">
            <div className="card-image">
            <img src={medicine_vector} alt="Medicine Vector" />
            </div>
                
            <div className="card-content">
                
                <h2>ORDER ONLINE</h2>
                <p>Search medicines online, or simply look up your symtomps and let our system suggest a medicine for you.</p>
            </div>
        </div>
            </Link>
        <div className="cards" onClick="">
            <div className="card-image">

            <img src={rx_vector} alt="RX Vector" />
            </div>
            <div className="card-content">
                <h2>UPLOAD PRESCRIPTION</h2>
                <p>Upload your prescription and get the medicine you need.</p>
            </div>
        </div>
        <Link to='/selectshop'>

        <div className= "cards" onClick="">
            <div className="card-image">
            <img src={shop_vector} alt="Shop Vector" />
            </div>
            <div className="card-content">
                <h2>BROSWE LOCAL SHOPS</h2>
                <p>Browse and search for local shops in your area from where you can buy medicines.</p>
            </div>
        </div>
        </Link>
        
    </div>
  )
}

export default MidCards