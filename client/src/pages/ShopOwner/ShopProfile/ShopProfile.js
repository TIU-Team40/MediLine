import React, {useState} from 'react'
import './ShopProfile.css'
import '../../../styles/global.css'

const ShopProfile = () => {
    const [updatePassword, setUpdatePassword] = useState(false);
  return (
    <div className="shop-profile-container">
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

                   
                    {
                        updatePassword ? (

                        <>

                        <label htmlFor="Password">New Password: </label>
                        <input type="password" />
                        </>
                        ):
                            
                        (
                            <div className='password-button'>
                            <button type="button"  onClick={()=>setUpdatePassword(true)}> 
                            Update Password </button>
                            </div>
                            
                        )
                    }


            </form>
            <div className="save-button">
                <button type="button"> Save </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShopProfile