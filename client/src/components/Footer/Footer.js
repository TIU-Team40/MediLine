import React from 'react'
import './Footer.css'
import '../../styles/global.css'
import { IconContext } from 'react-icons';
import {FaGithub, FaFacebook,FaInstagram,FaLinkedin, FaRegCopyright} from 'react-icons/fa';
import {MdLocationPin} from 'react-icons/md'
const Footer = () => {
 
  return (
    <IconContext.Provider value={{color:"black", size:"1.75em" }}>
    <footer className="main-footer">
        {/* <div className="search-location">
            <span>
            Search for a location 
            </span>
            <MdLocationPin/>
        </div> */}
        <div className="footer-links">
            <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Our Services</a></li>
                <li><a href="/">Founders</a></li>
            </ul>
        </div>
        <div className="footer-socials">
            <span>Connect With Us:</span>
            <div className="footer-socials-icons">
                <span>
                <a href="/">
                <FaGithub/>
                </a>
                </span>
                <span>
                <a href="/">
                <FaFacebook/>
                </a>
                </span>
                <span>
                <a href="/">
                <FaInstagram/>   
                </a>
                </span>
                <span>
                <a href="/">
                <FaLinkedin/>
                </a>
                </span>
            </div>
        </div>
        <div className="footer-copyright">
           
            <p> <span><FaRegCopyright size="1em"/></span>2022 Copyright. Students of Techno India University. Team 40. All rights reserved.</p>
        </div>
    </footer>
    </IconContext.Provider>
  )
}

export default Footer