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
    let singleService = {};

    const SetData = (data) => {
        console.log(data);
        const singleService = services.find(service => service.id == serviceId);
        setSingle(singleService);
    }
    useEffect(
        () => {
            fetch('/fakedb.json')
                .then(res => res.json())
                .then(data => SetData(data));

        }, []);

    //console.log(singleService);

    return (
        <div>
            <ServiceContainer key={ }></ServiceContainer>
        </div>
    );
};

export default ServiceDetail;