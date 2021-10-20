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
                .then(data => setServices(data[0].services));
        }, []);

    const singleService = services.find(service => service.id == serviceId);

    return (
        <div>
            {
                singleService !== undefined ?
                    <ServiceContainer key={singleService.id} service={singleService}></ServiceContainer>
                    : <>Loadi</>
            }
        </div>
    );
};

export default ServiceDetail;