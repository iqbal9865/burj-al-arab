import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.png'
import header from '../../images/header.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }}>
            <nav className='nav'>
                <ul>
                    <li>
                        <img className='logo' src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/room'>Room</Link>
                    </li>
                    <li>
                        <Link to='/book'>Book</Link>
                    </li>
                </ul>
             </nav>
             <div className="title-container">
                <h3>Burj Al Arab</h3>
                <h4>A global icon of Arabian luxury</h4>
            </div>
        </div>
    );
};

export default Header;