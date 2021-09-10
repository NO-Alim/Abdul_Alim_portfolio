import React,{useState, useEffect, useRef} from 'react'
import logo from '../img/logo.png'
import {FaDownload,FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
import Headroom from 'react-headroom'
import './Scss/Navbar.scss'
import Resume from '../img/Resume.doc'

import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    list: {
        width: 'auto',
    },
    fullList: {
        width: 'auto',
    },
    drawerPaper : {
        width: 'auto',
        background: "#0b162a",
        color: "#e9e9e9"
    }
});


const Navbar = () => {
    const [shadow, setShadow] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);
    const navRef = useRef(null);
    
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const toggleDrawerOutClick = (e) => {
        if (e.type === 'keydown' && (e.key === 'Enter' || e.key === 'shift')) {
            setDrawerOpen(false);
        }
    }

    const scrollHandler = () => {
        var top = window.scrollY;
        if (top === 0) {
            setShadow(false);
        } else{
            setShadow(true);
        }
    }

    const handleClick = (e) => {
        console.log(e);
    }

    useEffect(() => {
        window.addEventListener("scroll",scrollHandler, true);
        document.addEventListener("keydown", toggleDrawerOutClick);
        document.addEventListener('click', handleClick)
        return () =>{
            window.removeEventListener("scroll",scrollHandler,true)
            document.removeEventListener("keydown", toggleDrawerOutClick)
            document.removeEventListener('click', handleClick)

        }
    })

    const classes = useStyles();
    return (
        <>
            <Headroom>
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
                            <ScrollLink to="header" spy={true} smooth={true} offset={0} duration={500}>Home</ScrollLink>
                            </li>
                            <li>
                            <ScrollLink to="about" spy={true} smooth={true} offset={0} duration={500}>About</ScrollLink>
                            </li>
                            <li>
                            <ScrollLink to="experience" spy={true} smooth={true} offset={0} duration={500}>experience</ScrollLink>
                            </li>
                            <li>
                            <ScrollLink to="work" spy={true} smooth={true} offset={0} duration={500}>work</ScrollLink>
                            </li>
                            <li>
                            <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={500}>contact</ScrollLink>
                            </li>
                            <li><a href={Resume} download='Resume.doc' className="btn-btn">Resume &nbsp; <i><FaDownload /></i></a></li>
                        </ul>
                    </div>
                    <div className="menu-container">
                        <div className={`menus ${drawerOpen ? 'active': null}`} onClick={() => toggleDrawer()} ref={menuBtnRef}>
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                        </div>
                    </div>
                </div>
            </nav>
            </Headroom>
            <Drawer className={classes.list}
            palette="secondary"
            variant="persistent"
            open={drawerOpen}
            anchor="left"
            classes={{paper: classes.drawerPaper}}>
                <div className="drawer-container" ref={menuRef}>
                    <div className="drawer-btn-container">
                        <button onClick={() => setDrawerOpen(false)} className="close-btn"><FaTimes /></button>
                    </div>
                    <ul>
                            <li>
                                <ScrollLink to="header" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>Home</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>About</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>experience</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="work" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>work</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>contact</ScrollLink>
                            </li>
                            <li>
                                <a className="btn-btn" href={Resume} download="Resume.doc">Resume</a>
                            </li>
                        </ul>
                </div>
        </Drawer>
        </>
    )
}

export default Navbar
