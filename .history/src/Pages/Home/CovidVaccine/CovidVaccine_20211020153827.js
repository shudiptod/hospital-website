import React from 'react';

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

            <label class="block mt-4" />
            <span class="text-gray-700">Requested Limit</span>
            <select class="form-select mt-1 block w-full">
                <option>$1,000</option>
                <option>$5,000</option>
                <option>$10,000</option>
                <option>$25,000</option>
            </select>


            <div class="flex mt-6">
                <label class="flex items-center" />
                <input type="checkbox" class="form-checkbox" />
                <span class="ml-2">I agree to the <span class="underline">privacy policy</span></span>

            </div>
        </div >
    );
};

export default CovidVaccine;