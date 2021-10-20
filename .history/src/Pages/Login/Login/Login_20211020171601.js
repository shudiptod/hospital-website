import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>

            <div class="max-w-lg mx-auto">

                <form>
                    <div class="mb-6">
                        <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Name</label>
                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name" required="" />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required="" />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>


            </div>


            <button onClick={signInUsingGoogle} className="px-4 py-2 leading-normal text-sm bg-white font-semibold text-yellow-500  rounded-3xl
                border-2 border-gray-900"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default Login;