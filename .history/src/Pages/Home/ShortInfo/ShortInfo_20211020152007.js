import React from 'react';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

const ShortInfo = () => {
    return (
        <div className="w-10/12 flex text-white mt-16">
            <div className="w-4/12 bg-green-500 text-center rounded-l-lg py-4">
                <h3 className="text-lg text-white font-mono font-semibold">Emergency Cases</h3>
                <p className="text-sm w-8/12 my-5 mx-auto font-thin text-justify">Please feel free to contact our friendly reception staff with any general or medical enquiry.</p>
                <div className="flex w-6/12 items-center justify-evenly mx-auto">
                    <FaPhoneAlt></FaPhoneAlt>
                    <h3 className="text-xl text-white font-mono font-semibold">0163333555</h3>
                </div>
            </div>
            <div className="w-4/12 bg-indigo-600 text-center py-4">
                <h3 className="text-lg text-white font-mono font-semibold">Doctors Timetable</h3>
                <p className="text-sm w-8/12 my-5 mx-auto font-thin text-justify">
                    Qualified doctors available six days a week, view our timetable to make an appointment.
                </p>
                <button className="text-sm font-extralight mx-auto px-3 py-2 border-2 border-white
                hover:text-gray-900 hover:border-gray-900 rounded-full  hover:bg-white 
                flex items-center justify-evenly">
                    <span className="mx-1">View Timetable</span>
                    <FaArrowRight className="mt-1"></FaArrowRight>
                </button>

            </div>
            <div className="w-4/12 bg-blue-800 rounded-r-lg text-center py-4">
                <h3 className="text-lg text-white font-mono font-normal">Opening Hours</h3>
                <div className="w-8/12 grid grid-cols-1 divide-y-2 divide-white mx-auto">
                    <div className="flex justify-between">
                        <h3 className="text-sm text-white font-mono font-normal">Opening Hours</h3>
                        <h3 className="text-sm text-white font-mono font-normal">Opening Hours</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-lg text-white font-mono font-normal">Opening Hours</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-lg text-white font-mono font-normal">Opening Hours</h3>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ShortInfo;