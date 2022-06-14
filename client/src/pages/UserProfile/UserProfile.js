import React, { useContext, useState } from 'react'
import './UserProfile.css'
import '../../styles/global.css'
import CartContext from '../../context/Cart/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile';
import UpdatePassword from '../../components/UpdatePassword/UpdatePassword';
const UserProfile = ({info}) => {
    const [editDetails, setEditDetails] = useState(false);
    const navigate = useNavigate();
    const {firstName, lastName, phoneNumber, emailId} = info;
    const [updatePassword, setUpdatePassword] = useState(false)
    const {totalItem} = useContext(CartContext);
  return (
      <div className="userprofile-container">
        {editDetails && <EditUserProfile info={info} setEditDetails={setEditDetails}/>}
        {updatePassword && <UpdatePassword setUpdatePassword={setUpdatePassword}/>}
        <div className="user-profile-header">
        <h1>My Profile</h1>

        </div>
        <div className="user-profile-outer">

       
        <div className="userprofile-wrapper">
            <div className="user-icon">
                <FaUserCircle className='user-icon-icon'/>
            </div>
            <div className="user-content">

            <div className="user-name">
                <p>Name: <span>{firstName}</span> <span>
                    {lastName}</span></p>
            </div>
            <div className="user-email">
                <p>Email ID: <span>{emailId}</span></p>
            </div>
            <div className="user-phone">
                <p>Phone Number: <span>{phoneNumber}</span></p>
            </div>
            <div className="user-cartLength">
                <p>Item(s) in Cart: <span>{totalItem}</span></p>
            </div>
            <div className="all-buttons">
            <div className="update-button">
                
            
                    
                        <button type="button"
                        onClick={()=> setEditDetails(true)}>
                            Edit Details
                        </button>

                    
                   
                <Link to='/useraddress'>

                <button type="button">
                   Edit Address
                </button>
                </Link>

            </div>
            <div className="update-password-button">
                <button type='button' onClick={()=>setUpdatePassword(true)}>
                    Update Password
                </button>

            </div>
            <div className="logout-button">
                <button type='button'>
                    Logout
                </button>

            </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default UserProfile