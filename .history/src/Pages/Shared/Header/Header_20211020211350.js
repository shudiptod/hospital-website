import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div id="header" className="text-blue-700 font-bold container w-full bg-white h-20 mx-auto
        flex justify-evenly items-center mb-5
        ">
            <Link to="/">
                <h2 className="text-xl italic font-bold text-blue-800
            cursor-pointer filter drop-shadow-2xl select-none">Sunrise Medical</h2>

            </Link>
            <div className="container w-6/12 flex justify-evenly">
                <Link to="/home" >
                    <h2 className="text-lg font-semibold px-2 py-1  hover:text-indigo-900 
                    border-0 rounded-lg">Home</h2>
                </Link>
                <Link to="/services">
                    <div className="flex justify-evenly items-center hover:text-indigo-900 ">
                        <FaCrown></FaCrown>
                        <h2 className="text-lg font-semibold px-2 py-1  
                    border-0 rounded-lg"> Services</h2>

                    </div>

                </Link>
                <Link to="/careers">
                    <h2 className="text-lg font-semibold px-2 py-1  hover:text-indigo-900 
                    border-0 rounded-lg">Career</h2>
                </Link>
                <Link to="/about">
                    <h2 className="text-lg font-semibold px-2 py-1  hover:text-indigo-900 
                    border-0 rounded-lg">About</h2>
                </Link>
            </div>
            <div className="w-3/12 flex  items-center justify-evenly justify-self-end">
                {user.displayName ?
                    <>
                        {user.photoURL ?
                            <img className="rounded-full h-10 w-10 flex items-center justify-center border-4 border-double border-indigo-600" src={user.photoURL} alt="" />
                            :
                            <img className="rounded-full h-10 w-10 flex items-center justify-center border-4 border-double border-indigo-600" src="https://image.flaticon.com/icons/png/128/1077/1077063.png" alt="" />
                        }

                        <h2 className="select-none text-green-800 font-bold font-serif underline hover:shadow-xl cursor-pointer">{user.displayName}</h2>
                        <button onClick={logOut} className="text-white font-medium text-lg bg-blue-600 rounded-full h-10 py-2 px-6 flex items-center hover:bg-white
                    border-2 hover:border-gray-900 hover:text-gray-900">Logout</button>
                    </>
                    :
                    <>
                        <Link to='/login'>
                            <button className="text-white font-medium text-lg bg-blue-600 rounded-full h-10 py-2 px-6 flex items-center hover:bg-white
                    border-2 hover:border-gray-900 hover:text-gray-900">Login</button>
                        </Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;