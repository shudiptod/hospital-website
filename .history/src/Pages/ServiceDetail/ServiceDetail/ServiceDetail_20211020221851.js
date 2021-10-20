import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ServiceContainer from '../ServiceContainer';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(
        () => {
            fetch('/fakedb.json')
                .then(res => res.json())
                .then(data => {


                    setServices([data[0].services]);

                });
        }, []);
    console.log(services);
    return (
        <div>
            <ServiceContainer></ServiceContainer>
            {
                services.map(service => <h2>{serviceId.name}</h2>)
            }
        </div>
    );
};

export default ServiceDetail;