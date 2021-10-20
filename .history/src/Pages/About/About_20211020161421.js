import React from 'react';
import AboutBanner from "../../images/1.jpg";
const About = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">About Us</h2>
            <div className="flex justify-evenly">
                <img src="https://image.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21212.jpg" className="w-3/12 h-64 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
                <img src="https://image.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21212.jpg" className="w-5/12 h-80 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
                <img src="https://image.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21212.jpg" className="w-3/12 h-64 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
            </div>
        </div>
    );
};

export default About;