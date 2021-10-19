import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div id="header" className="text-blue-700 font-bold container w-full bg-white h-20 mx-auto
        flex justify-around items-center
        ">
            <h2 className="text-xl italic font-bold text-blue-800 filter drop-shadow-2xl select-none">Sunrise</h2>
            <div className="container w-8/12 flex justify-evenly">
                <Link to="/home" >
                    <h2 className="text-lg font-semibold px-2 py-1  hover:text-indigo-900 
                    border-0 rounded-lg">Home</h2>
                </Link>
                <Link to="/services">
                    <h2 className="text-lg font-semibold px-2 py-1  hover:text-indigo-900 
                    border-0 rounded-lg">Services</h2>
                </Link>
                <Link to="/packages">
                    <h2 className="text-lg font-semibold px-2 py-1  hover:text-indigo-900 
                    border-0 rounded-lg">Packages</h2>
                </Link>
                <Link to="/about">
                    <h2 className="text-lg font-semibold px-2 py-1  hover:text-indigo-900 
                    border-0 rounded-lg">About</h2>
                </Link>
            </div>
            <button className="text-white font-medium text-lg bg-blue-600 rounded-full h-10 py-2 px-6 flex items-center hover:bg-white hover:text-gray-900">Logout</button>
        </div>
    );
};

export default Header;