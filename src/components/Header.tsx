import React from 'react';
import './style/Header.css';
import logo from '../assets/Company.png'; 


const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Company Logo" className="company-logo" />
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
