import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import logo from '../../../../assets/Images/logo.png'
import logo2 from '../../../../assets/logo.png'
import SearchBar from '../SearchBar/SearchBar';
import { useContext } from 'react';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const location = useLocation();
    const activeStyle = {
        color : '#F9A51A'
    }
    const handleSignOut = () =>{
        signOutUser()
        .then(()=>{})
        .catch(error => {
            console.log(error.message)
        })
    }
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
                    <Link style={location.pathname === '/' ? activeStyle : null} className='duration-200  hover:text-btn-color' to="/">Home</Link>
                    <Link style={location.pathname === '/destination' ? activeStyle : null} className='duration-200  hover:text-btn-color' to="/destination">Destination</Link>
                    <Link style={location.pathname === '/blog' ? activeStyle : null} className='duration-200  hover:text-btn-color' to="/blog">Blog</Link>
                    <Link style={location.pathname === '/contact' ? activeStyle : null} className='duration-200  hover:text-btn-color' to="/contact">Contact</Link>
                    {
                        user ? <div className='flex items-center'>
                            <UserCircleIcon className='h-8 w-8 mx-3'/>
                            <button onClick={handleSignOut} className='py-2 px-5 text-black rounded bg-btn-color' >Sign Out</button>
                        </div> : <Link to='/login'><button className='py-2 px-5 text-black rounded bg-btn-color' >Login</button></Link>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;