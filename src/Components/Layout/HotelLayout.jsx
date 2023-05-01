import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const HotelLayout = () => {
    return (
        <div className='flex flex-col items-center'>
            <Header/>
            <hr className=' w-10/12'/>
            <Outlet/>
        </div>
    );
};

export default HotelLayout;