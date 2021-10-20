import React from 'react';
import './CovidVaccine.css';
const CovidVaccine = () => {
    return (
        <div className="p-4 shadow-md rounded-md text-left text-md font-semibold w-6/12">
            <h2 className="text-center text-3xl mt-8 mb-4">Covid Vaccine Registration</h2>
            <label className="block" />
            <span className="text-gray-700">Name</span>
            <input className="form-input mt-1 block w-full" placeholder="Jane Doe" />
            <label className="block mt-3" />
            <span className="text-gray-700">NID No.</span>
            <input className="form-input mt-1 block w-full" placeholder="00000000" />
            <label className="block mt-3" />
            <span className="text-gray-700">Phone No.</span>
            <input type="tel" className="form-input mt-1 block w-full" placeholder="0170000000" />

            <label className="block mt-4" />
            <span className="text-gray-700">Birth Date</span>
            <input type="date" className="form-select mt-1 block w-full" />

            <div className="flex mt-6">
                <label className="flex items-center" />
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">I agree to the <span className="underline">privacy policy</span></span>

            </div>
            <button className="py-2 px-4 rounded-full bg-blue-400">Submit</button>
        </div >
    );
};

export default CovidVaccine;