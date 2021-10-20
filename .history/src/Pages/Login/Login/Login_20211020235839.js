import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import useFirebase from '../../../hooks/useFirebase';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNew, setIsNew] = useState(false);
    const [passShow, setPassShow] = useState('');

    const { signUpWithEmail, signInUsingGoogle, signInWithEmail } = useFirebase();


    const history = useHistory();


    const emailLogin = (e) => {
        e.preventDefault();
        signInWithEmail(email, password);
        document.getElementById("form").reset();
        history.push("/home");
    }
    const emailSignUp = (e) => {
        e.preventDefault();
        const passShow = signUpWithEmail(name, email, password);
        setPassShow(passShow);
        document.getElementById("form").reset();
        history.push("/home");
        window.location.reload();
    }
    return (
        <div className="flex flex-col items-center w-full">
            {
                isNew ?
                    <>
                        <h2 className="text-4xl text-center font-semibold text-gray-800 font-mono mb-5">Create Account</h2>
                        <h2 className=" select-none text-sm text-center font-semibold text-gray-800 font-mono mb-5">already have an account?
                            <span onClick={() => setIsNew(false)} className=" mx-2 underline hover:text-blue-900 cursor-pointer">Click Here</span></h2>

                        <div className="w-4/12 mx-auto border-2 rounded-md border-solid border-blue-900 px-6 py-8" >
                            <form id="form" onSubmit={(e) => { emailSignUp(e) }}>

                                <div className="mb-6">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                    <input onBlur={(e) => { setName(e.target.value) }} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="name" required="" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                                    <input onBlur={(e) => { setEmail(e.target.value) }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required="" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                    <input onBlur={(e) => { setPassword(e.target.value) }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                                    {passShow}
                                </div>

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                            </form>
                        </div>
                    </>
                    :
                    <>
                        <h2 className="text-4xl text-center font-semibold text-gray-800 font-mono mb-5">Sign In</h2>
                        <h2 className="select-none text-sm text-center font-semibold text-gray-800 font-mono mb-5">Dont have an account?
                            <span onClick={() => setIsNew(true)} className=" mx-2 underline hover:text-blue-900 cursor-pointer">Click Here</span></h2>

                        <div className="w-4/12 mx-auto border-2 rounded-md border-solid border-blue-900 px-6 py-8" >

                            <form id="form" onSubmit={(e) => { emailLogin(e) }}>

                                <div className="mb-6">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                                    <input onBlur={(e) => { setEmail(e.target.value) }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required="" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                    <input onBlur={(e) => { setPassword(e.target.value) }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                            </form>


                        </div>
                    </>
            }

            <div className=" w-3/12 container flex items-center justify-around mt-5">
                <div className="h-1 w-4/12 bg-indigo-900" ></div>
                <h2 className="text-4xl text-center font-semibold text-gray-800 font-mono">OR</h2>
                <div className="h-1 w-4/12 bg-indigo-900" ></div>
            </div>
            <h2 className="text-xl text-center font-semibold text-gray-800 font-mono my-3">Sign In Using Google</h2>
            <button onClick={signInUsingGoogle} className="px-6 py-2 leading-normal text-xl bg-white font-bold text-yellow-500  rounded-3xl
                border-2 border-blue-600 hover:bg-gray-900 hover:text-white"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default Login;