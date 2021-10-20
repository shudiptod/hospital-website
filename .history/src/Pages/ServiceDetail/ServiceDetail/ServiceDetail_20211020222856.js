import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import ServiceContainer from '../ServiceContainer';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([]);
    const [single, setSingle] = useState({});
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
    setSingle(singleService);
    const { name, details, img } = singleService;
    //console.log(singleService);

    return (
        <div className="container mx-auto ">
            <div className="mx-auto w-full shadow-2xl filter drop-shadow-2xl py-10">
                <h2 className="text-3xl text-gray-800 font-mono font-semibold text-center">{name}</h2>
                <img src={img}
                    className="mt-5 mx-auto w-6/12 h-96"
                />
                <p className="text-lg text-gray-800 text-justify font-mono mt-5 mx-auto w-6/12">{details}</p>
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