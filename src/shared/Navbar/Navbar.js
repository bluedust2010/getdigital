import React, { useState } from 'react';
import './Navbar.css';
import Environment from '../../Environment';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className='shared-header'>
            <div className='shared-image-wrapper'>
                <img className='shared-logo' alt='place-holder' src={Environment.logoUrl} />
            </div>

            {/* Hamburger Icon */}
            <div className='hamburger-menu' onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Slide-out Menu */}
            <nav className={`shared-nav-bar ${isMenuOpen ? 'active' : ''}`}>
                <ul className='shared-nav-list'>
                    <li className='shared-nav-list-item'>
                        <a className='shared-nav-link' href='/' onClick={toggleMenu}>Home</a>
                    </li>
                    <li className='shared-nav-list-item'>
                        <a className='shared-nav-link' href='/about-us' onClick={toggleMenu}>About Us</a>
                    </li>
                    <li className='shared-nav-list-item'>
                        <a className='shared-nav-link' href='/services' onClick={toggleMenu}>Services</a>
                    </li>
                    <li className='shared-nav-list-item'>
                        <a className='shared-nav-link' href='/contact-us' onClick={toggleMenu}>Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
