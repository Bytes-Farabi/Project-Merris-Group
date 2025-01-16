import React from 'react';
import Banner from '../Components/Banner';
import AboutUs from './AboutUs';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <div className='mt-10'>
            <Banner></Banner>
            </div>
            <div className='mt-14'>
                <AboutUs></AboutUs>
            </div>
            <div className='mt-14'>
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;