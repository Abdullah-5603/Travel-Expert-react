import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Destination from '../pages/Destination/Destination';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-cover bg-center bg-background-image" >
            </div>
            <div className="absolute inset-0 bg-black opacity-60">
            </div>
            <Header />
            <Outlet/>
        </div>



    );
};

export default Main;