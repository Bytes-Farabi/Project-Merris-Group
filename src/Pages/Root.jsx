import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <div className='mt-8'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className='mt-14'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;