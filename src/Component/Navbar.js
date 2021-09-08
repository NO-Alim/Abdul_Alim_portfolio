import React from 'react'
import logo from '../img/logo.png'
import {FaDownload} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import './Scss/Navbar.scss'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="logo-container">
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="link-container">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Experience</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><button className="btn-btn">Resume &nbsp; <i><FaDownload /></i></button></li>
                        </ul>
                    </div>
                    <div className="menu-container">
                        <div className="menus">
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
