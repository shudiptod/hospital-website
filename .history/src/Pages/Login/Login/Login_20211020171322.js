import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>

            <div className="max-w-lg mx-auto">

                <form>
                    <div className="mb-6">
                        <label for="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name" required="" />
                    </div>
                    <div className="mb-6">
                        <label for="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>


            </div>


            <button onClick={signInUsingGoogle} className="px-4 py-2 leading-normal text-sm bg-white font-semibold text-blue-600  rounded-3xl
                border-2 border-gray-900"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default Login;