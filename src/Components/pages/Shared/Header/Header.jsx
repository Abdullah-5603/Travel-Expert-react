import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import logo from '../../../../assets/Images/logo.png'
import logo2 from '../../../../assets/logo.png'
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    const location = useLocation();
    
    return (
        <header className="relative w-10/12 py-5 bg-opacity-100 mx-auto">
            <div className="flex justify-between items-center">
                <Link to='/'>
                    {
                         location.pathname === '/' || location.pathname.startsWith('/destination/') ? <img className="w-40 h-16" src={logo} alt="Logo" /> : <img className="w-40 h-16" src={logo2} alt="Logo" />
                    }
                    </Link>
                {
                    location.pathname === '/' || location.pathname.startsWith('/destination/')  ?  <SearchBar/> : null

                }
                <nav className={`flex items-center space-x-8 ${location.pathname === '/' || location.pathname.startsWith('/destination/') ? 'text-white' : 'text-black'} font-bold`}>
                    <Link to="/news">News</Link>
                    <Link to="/">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to='/login'><button className='py-2 px-5 text-black rounded bg-btn-color' >Login</button></Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;