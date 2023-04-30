import React from 'react';
import Header from '../pages/Shared/Header/Header';
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-cover bg-center bg-background-image" >
            </div>
            <div className="absolute inset-0 bg-black opacity-50">
            </div>
            <Header />
        </div>



    );
};

export default Main;