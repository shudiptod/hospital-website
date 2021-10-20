import React from 'react';
import Banner from './Banner/Banner';
import ShortInfo from './ShortInfo/ShortInfo';
import TopServices from './TopServices/TopServices';

const Home = () => {

    return (
        <div className="flex flex-col items-center">
            <img src='./sunrise-logo.png' className="w-2/12 h-14 mb-5 shadow-xl" />
            <Banner></Banner>
            <TopServices></TopServices>
            <ShortInfo></ShortInfo>
        </div>
    );
};

export default Home;