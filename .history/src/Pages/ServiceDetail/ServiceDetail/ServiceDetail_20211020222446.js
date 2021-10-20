import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ServiceContainer from '../ServiceContainer';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(
        () => {
            fetch('/fakedb.json')
                .then(res => res.json())
                .then(data => {


                    setServices(data[0].services);

                });
        }, []);
    const singleService = services.find(service => service.id == serviceId);
    //console.log(singleService);
    return (
        <div className="container mx-auto ">
            <div className="mx-auto w-full shadow-2xl filter drop-shadow-2xl py-10">
                <h2 className="text-3xl text-gray-800 font-mono font-semibold text-center">Service Name</h2>
                <img src="https://image.freepik.com/free-vector/emergency-service-team_23-2147933444.jpg"
                    className="mt-5 mx-auto w-6/12 h-96"
                />
                <p className="text-lg text-gray-800 text-justify font-mono mt-5 mx-auto w-6/12">Our Dermatology service provides treatment of skin diseases for elective and emergency patients. Dermatology is the study of the skin and skin diseases. We care for people who are in hospital, have been to hospital or need to come to hospital</p>
                <div className="flex items-center justify-around w-6/12 mx-auto mt-8">
                    <button className="bg-blue-600 text-white text-md font-semibold mx-auto px-3 py-2 border-2 border-white
                    hover:text-gray-900 hover:border-gray-900 rounded-full  hover:bg-white 
                    flex items-center justify-evenly">
                        <FaLongArrowAltLeft className="mt-1"></FaLongArrowAltLeft>
                        <span className="mx-1">Go Back</span>
                    </button>
                    <button className="bg-green-600 text-white text-md font-semibold mx-auto px-3 py-2 border-2 border-white
                    hover:text-gray-900 hover:border-gray-900 rounded-full  hover:bg-white 
                    flex items-center justify-evenly">
                        Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;