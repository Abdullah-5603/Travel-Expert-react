import React from 'react';
import CommonHeader from '../pages/Shared/CommonHeader/CommonHeader';
import { Outlet } from 'react-router-dom';

const HotelLayout = () => {
    return (
        <div className='flex flex-col items-center'>
            <CommonHeader/>
            <hr className=' w-10/12'/>
            <Outlet/>
        </div>
    );
};

export default HotelLayout;