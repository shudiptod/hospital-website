import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ShortInfo = () => {
    return (
        <div className="w-10/12 flex text-white mt-16">
            <div className="w-4/12 bg-green-500 text-center rounded-l-lg py-3">
                <h3 className="text-xl text-white font-mono font-semibold">Emergency Cases</h3>
                <p className="w-8/12 my-5 mx-auto font-semibold">Please feel free to contact our friendly reception staff with any general or medical enquiry.</p>
                <div className="flex w-8/12 items-center justify-evenly">
                    <FaPhoneAlt></FaPhoneAlt>
                    <h3 className="text-xl text-white font-mono font-semibold">0163333555</h3>
                </div>
            </div>
            <div className="w-4/12 bg-indigo-700">
                time table
            </div>
            <div className="w-4/12 bg-purple-700 rounded-r-lg">

            </div>

        </div>
    );
};

export default ShortInfo;