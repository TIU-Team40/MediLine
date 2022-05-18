import React from 'react'
import './Navbar.css'
import '../styles/global.css'


const Navbar = () => {
  return (
    <>
        <nav className="main-nav">
                <div className="logo">
                    <h3><a href="/">MediLine</a></h3>
                </div>
                <div className="menu-link">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/consult">Consult</a></li>
                        
                    </ul>
                </div>
                <div className="auth">
                    <span>Sign In</span>
                    <button type="button" className="auth-btn">Sign Up</button>
                </div>


        </nav>
    </>
  )
}

export default Navbar