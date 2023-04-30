import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/Images/logo.png'
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return (
        <header className="relative w-10/12 py-5 bg-opacity-100 mx-auto">
            <div className="flex justify-between items-center">
                <img className="w-40 h-16" src={logo} alt="Logo" />
                <SearchBar></SearchBar>
                <nav className="flex items-center space-x-8 text-white font-bold">
                    <Link to="">News</Link>
                    <Link to="">Destination</Link>
                    <Link to="">Blog</Link>
                    <Link to="">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;