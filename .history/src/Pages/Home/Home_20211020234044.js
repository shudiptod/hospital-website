import React from 'react';
import Banner from './Banner/Banner';
import CovidVaccine from './CovidVaccine/CovidVaccine';
import ShortInfo from './ShortInfo/ShortInfo';
import TopServices from './TopServices/TopServices';

const Home = () => {

    return (
        <div className="flex flex-col items-center">
            <img src='./sunrise-logo.png' className="lg:w-2/12 h-14 my-5 shadow-xl" />
            <Banner></Banner>
            <TopServices></TopServices>
            <ShortInfo></ShortInfo>
            <CovidVaccine></CovidVaccine>
        </div>
    );
};

export default Home;