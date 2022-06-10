import React, {useState} from 'react'
import './EditUserProfile.css'
import '../../styles/global.css'
import {GrFormClose} from 'react-icons/gr'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import usePasswordToggle from '../../hooks/usePasswordToggle'
const EditUserProfile = ({info, setEditDetails}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <div className="edituserprofile-background">
       <div className="edituserprofile-wrapper">
           <div className="edituserprofile-header">
           <h1>Change my details: </h1>
            <GrFormClose size="2em" className='edituserprofile-close-icon' onClick={()=> setEditDetails(false)}/>
           </div>
           
           <form action="/" className='edituser-form'>
               <div className="edituser-form-container">

               <label htmlFor="firstname">First name : </label>
               <input type="text"  />
               </div>
               <div className="edituser-form-container">

               <label htmlFor=" lastname">Last name : </label>
               <input type="text"  />
               </div>
               <div className="edituser-form-container">

               <label htmlFor="phone">Phone number : </label>
               <input type="number" />
               </div>
               <div className="edituser-form-container ">

               <label htmlFor="email">Email ID : </label>
               <input type="email"  />
               </div>
               {
                   showPassword && 
                 <div className="edituser-form-container ">
                     <label htmlFor="password">New password : </label>
                     <input type={PasswordInputType}/>
                     <button className="password-eye-button">
                        {ToggleIcon}
                  
                     </button>
                </div>
               }
           </form>
                  <div className="change-password">
               <button type="button" onClick={()=> setShowPassword(true)}>
                   Update Password
               </button>
                  </div>
                <div className="save-button">
                    <button type="button">
                        Save
                    </button>
                </div>
       </div>
    </div>
  )
}

export default EditUserProfile