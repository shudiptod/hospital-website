import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="mb-0 w-full h-40 bg-gray-900 text-white font-sans text-center p-3 pb-6 footer-div grid grid-cols-3">
            <div className="">
                <h2 className="text-xl font-medium p-2">Sunrise Medical</h2>
                <p className="text-sm font-medium p-1 wrap mx-auto w-8/12">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
            </div>
            <div className="">
                <h2 className="text-xl font-medium p-2">Sunrise Medical Hosptial Bangladesh</h2>
                <h2 className="text-sm font-medium p-1">Mirpur, Dhaka 1216</h2>
                <h2 className="text-sm font-medium p-1">019XXX4449X</h2>
            </div>
            <p className="text-sm font-semibold italic p-2">@all rights reserved to shudipto 2021</p>

        </div>
    );
};

export default Footer;