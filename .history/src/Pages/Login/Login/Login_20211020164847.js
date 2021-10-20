import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>

            <div class="max-w-lg mx-auto">

                <form>
                    <div class="mb-6">
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email />
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required="">
        </div>
                            <div class="mb-6">
                                <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="">
        </div>
                                <div class="flex items-start mb-6">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
                                        <div class="text-sm ml-3">
                                            <label for="remember" class="font-medium text-gray-900">Remember me</label>
                                        </div>
                                    </div>
                                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
    </form>

                                <p class="mt-5">This form element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.</p>
                            </div>

                            <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
                            <button onClick={signInUsingGoogle} className="px-4 py-2 leading-normal text-sm bg-white font-semibold text-blue-600  rounded-3xl
                border-2 border-gray-900">Google</button>
                    </div>
                        );
};

                        export default Login;