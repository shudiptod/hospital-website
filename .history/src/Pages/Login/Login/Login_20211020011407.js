import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <button onClick={signInUsingGoogle} className="px-4 py-2 leading-normal text-sm bg-white font-semibold text-blue-600  rounded-3xl
                border-2 border-gray-900">Google</button>
        </div>
    );
};

export default Login;