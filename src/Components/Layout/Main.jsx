import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute bg-cover bg-center" style={{backgroundImage: "url('https://i.ibb.co/bzV4hmD/Rectangle-1.png')", height: '100vh', width: '100%'}}></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Header />
            <Outlet/>
            <ToastContainer/>
        </div>



    );
};

export default Main;