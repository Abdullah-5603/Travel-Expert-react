import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('./src/assets/Images/Rectangle 1.png')", height: '100vh', width: '100%'}}>
            </div>
            <div className="absolute inset-0 bg-black opacity-60">
            </div>
            <Header />
            <Outlet/>
        </div>



    );
};

export default Main;