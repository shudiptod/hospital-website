import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data[0].services));

    }, [services]);
    console.log(services);
    return (
        <div className="container mx-auto ">
            <div className="mx-auto w-full shadow-2xl filter drop-shadow-2xl py-10">
                <h2 className="text-3xl text-gray-800 font-mono font-semibold text-center">Service Name</h2>
                <img src="https://image.freepik.com/free-vector/emergency-service-team_23-2147933444.jpg"
                    className="mt-5 mx-auto w-6/12 h-96"
                />
                <p className="text-lg text-gray-800 text-justify font-mono mt-5 mx-auto w-6/12">Our Dermatology service provides treatment of skin diseases for elective and emergency patients. Dermatology is the study of the skin and skin diseases. We care for people who are in hospital, have been to hospital or need to come to hospital</p>
                <div className="flex items-center justify-around">

                </div>
            </div>

            {serviceId}
            {
                services.map(serivce => <h2>{serviceId.name}</h2>)
            }
        </div>
    );
};

export default ServiceDetail;