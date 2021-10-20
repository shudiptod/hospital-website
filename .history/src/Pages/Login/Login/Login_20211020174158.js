import React, { useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, signInWithEmail } = useFirebase();

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-4xl text-center font-semibold text-gray-800 font-mono mb-5">Sign In</h2>

            <div class="w-4/12 mx-auto border-2 rounded-md border-solid border-blue-900 px-6 py-8" >

                <form onSubmit={emailSignUp}>

                    <div class="mb-6">
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                        <input onBlur={setEmail(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required="" />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                        <input onBlur={setPassword(e.target.value)} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>


            </div>
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