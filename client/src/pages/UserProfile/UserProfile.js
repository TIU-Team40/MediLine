import React from 'react'
import '../../styles/global.css'
import './UserProfile.css'

const UserProfile = () => {
    return (
        <div>
            <div className='form-info'>
                <form>
                    <input type="text" placeholder='Enter your name' className='form-input'/>
                    <input type="text" placeholder='Enter your phone number' className='form-input'/>
                    <br />
                    <label className='form-address'>Add your address</label>
                    <input type="text" className='form-input'/>
                    <br />
                    <input type="text" className='form-input'/>
                    <br />
                    <input type="text" className='form-input'/>
                    <br />
                    <input type="text" className='form-input' />
                    <input type="button" value="Save" className='form-save-btn'/>
                </form>
            </div>
        </div>
    )
}

export default UserProfile