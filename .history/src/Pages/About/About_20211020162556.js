import React from 'react';

const About = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">About Us</h2>
            <div className="flex justify-evenly items-center">
                <img src="https://image.freepik.com/free-photo/doctor-nurse-discussing-digital-tablet_107420-84815.jpg" className="w-3/12 h-64 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
                <img src="https://image.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21212.jpg" className="w-5/12 h-80 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
                <img src="https://image.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg" className="w-3/12 h-64 mx-auto rounded-md shadow-lg filter drop-shadow-xl" />
            </div>
            <div className="my-8 flex items-center justify-evenly">
                <div className="w-4/12">
                    <h2 className="text-4xl text-center font-semibold text-gray-800 font-mono my-10">Improving The Quality Of Your Life Through Better Health.</h2>
                </div>
                <div className="w-4/12">
                    <img src="https://img.freepik.com/free-photo/asian-young-main-group-hospital-professional_1291-37.jpg?size=338&ext=jpg"
                        className="w-full h-64 rounded-md shadow-lg filter drop-shadow-3xl" />
                </div>
            </div>
        </div>
    );
};

export default About;