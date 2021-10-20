import React from 'react';

const About = () => {
    return (
        <div className="text-center w-full">
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10"
            >About Us</h2>
            <div className="w-full lg:flex-row sm:flex-col justify-evenly items-center">
                <img src="https://image.freepik.com/free-photo/doctor-nurse-discussing-digital-tablet_107420-84815.jpg"
                    className="lg:w-3/12 h-64 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
                <img src="https://image.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21212.jpg"
                    className="lg:w-5/12 h-80 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
                <img src="https://image.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg"
                    className=" lg:w-3/12  h-64 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
            </div>
            <div className="my-16 lg:flex-row sm:flex-col items-center justify-evenly">
                <div className="lg:w-5/12 sm:w-full my-5">
                    <h2 className="text-4xl text-center font-semibold text-gray-800 font-mono my-5">Improving The Quality Of Your Life Through Better Health.</h2>
                    <p className="text-justify font-thin text-gray-800 font-mono px-6 py-3"
                    >Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare. </p>
                </div>
                <div className="lg:w-5/12 sm:w-full">
                    <img src="https://image.freepik.com/free-photo/young-doctor-vaccinating-little-girl_23-2148880484.jpg"
                        className="w-full h-64 rounded-md shadow-lg filter drop-shadow-3xl" />
                </div>
            </div>
        </div>
    );
};

export default About;