import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Shared/Card/Card';

const Services = (props) => {

    const [services, setServices] = useState([]);
    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setServices(data[0].services);
            });
    }, []);

    return (
        <div className="h-full">
            <div className="bg-services-banner h-56 bg-no-repeat bg-cover bg-center">
                <h2 className="text-3xl text-center font-semibold text-gray-800 font-mono my-10">Our services are centered for the sickest</h2>
            </div>

            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 my-3 mx-auto">
                {

                    services.map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;