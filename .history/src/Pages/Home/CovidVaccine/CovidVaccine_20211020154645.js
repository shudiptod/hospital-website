import React from 'react';
import './CovidVaccine.css';
const CovidVaccine = () => {
    return (
        <div class="p-4 shadow-md rounded-md text-left text-md font-semibold w-6/12">
            <h2 className="text-center text-3xl mt-8 mb-4">Covid Vaccine Registration</h2>
            <label class="block" />
            <span class="text-gray-700">Name</span>
            <input class="form-input mt-1 block w-full" placeholder="Jane Doe" />
            <label class="block mt-3" />
            <span class="text-gray-700">NID No.</span>
            <input class="form-input mt-1 block w-full" placeholder="00000000" />
            <label class="block mt-3" />
            <span class="text-gray-700">Phone No.</span>
            <input type="tel" class="form-input mt-1 block w-full" placeholder="0170000000" />

            <label class="block mt-4" />
            <span class="text-gray-700">Birth Date</span>
            <input type="date" class="form-select mt-1 block w-full" />

            <div class="flex mt-6">
                <label class="flex items-center" />
                <input type="checkbox" class="form-checkbox" />
                <span class="ml-2">I agree to the <span class="underline">privacy policy</span></span>

            </div>
            <button className="py-3 px-6 bg-blue-50">Submit</button>
        </div >
    );
};

export default CovidVaccine;