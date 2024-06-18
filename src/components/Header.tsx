import React from 'react';
import './Header.css'; 
import logo from "../assets/logo.png";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Services</a></li>
                    <li><a href="/#">Contact</a></li>                    
                    <li><a href="/#" className='signup'><span>Sign Up</span></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
