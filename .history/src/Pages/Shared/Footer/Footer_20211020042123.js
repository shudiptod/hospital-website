import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="mb-0 w-full bg-blue-900 text-white font-sans text-center p-3 flex flex-col justify-center footer-div">
            <div className="mx-auto grid grid-cols-2 w-10/12 pb-14 items-center justify-items-center text-center">
                <div className="mx-auto w-full h-full">
                    <h2 className="text-xl font-medium p-2">Sunrise Medical</h2>
                    <p className="text-sm font-medium p-1 mx-auto">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
                </div>
                <div className="mx-auto w-full">
                    <h2 className="text-xl font-medium p-2">Contact With Us</h2>
                    <h2 className="text-sm font-medium p-1">sunrise@yahoo.com</h2>
                    <h2 className="text-sm font-medium p-1">019XXX4449X</h2>
                </div>
            </div>
            <p className="text-sm font-semibold italic p-2">@all rights reserved to shudipto 2021</p>

        </div>
    );
};

export default Footer;