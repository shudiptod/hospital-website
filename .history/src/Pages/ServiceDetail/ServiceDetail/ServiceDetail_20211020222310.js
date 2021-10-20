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
    console.log(singleService);
    return (
        <div>
            <ServiceContainer></ServiceContainer>
            {
                services.map(service => <h2>{service.name}</h2>)
            }
        </div>
    );
};

export default ServiceDetail;