import React from 'react'
import logo from '../../image/logo_holding.png'
import userLogo from '../../image/user-circle.png'
import { NavBarStyled } from './style';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>

            <NavBarStyled>
                <nav className="menu">
                    <div className="menu-container container">
                        <div className="menu-left">
                            <div className="menu-logo">
                                <a to="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="menu-right">
                            <div className="menu-item">
                                <a className='menu-link' to="/">
                                    Home
                                </a>
                            </div>
                            <div className="menu-item">
                                {/* <a className="menu-link" to="/about">
                                    About us
                                </a> */}
                                <a className='menu-link' to="/">
                                    About Us
                                </a>
                            </div>
                            <div className="menu-item hidden-mobile">
                                <a smooth className="menu-link" to="/#service">
                                    Service
                                </a>
                            </div>


                            <div className="menu-item">
                                <a className="menu-link" to="/contact">
                                    Contact
                                </a>
                            </div>
                            <div className="">
                                <a className="menu-link" to="/">
                                    <img src={userLogo} alt="user-logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </NavBarStyled>

        </>
    )
}

export default NavBar;
