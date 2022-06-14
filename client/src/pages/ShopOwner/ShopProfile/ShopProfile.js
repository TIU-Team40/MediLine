import React, {useState} from 'react'
import './ShopProfile.css'
import '../../../styles/global.css'
import UpdatePassword from '../../../components/UpdatePassword/UpdatePassword';

const ShopProfile = () => {
    const [updatePassword, setUpdatePassword] = useState(false);
  return (
    <div className="shop-profile-container">
        {updatePassword && <UpdatePassword setUpdatePassword={setUpdatePassword}/>}
        <h1>Profile</h1>
        <div className="shop-profile-wrapper">
            
            <h3>Update Profile Details: </h3>
            <div className="shop-profile-form">

            <form action="/" id="update_form">
                    <label htmlFor="Name">Shop name: </label>
                    <input type="text" />
                    <label htmlFor="number">Contact number: </label>
                    <input type="text" />
                    <label htmlFor="email">Email ID: </label>
                    <input type="text" />
                    <label htmlFor="Name">Address Line 1: </label>
                    <input type="text" />
                    <label htmlFor="Name">Address Line 2: </label>
                    <input type="text" />
                    <label htmlFor="Name">Pincode: </label>
                    <input type="number" />

                   
                   


            </form>
            <div className="update-password-button">
                <button type="button" onClick={()=> {setUpdatePassword(true)}}>
                    Update Password
                </button>
            </div>
            <div className="save-button">
                <button type="button"> Save </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShopProfile