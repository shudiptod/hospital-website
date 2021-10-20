import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import ServiceContainer from '../ServiceContainer';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([]);
    const [detailService, setDetailService] = useState({});
    console.log(services);
    const SetData = (data) => {

        setServices(data[0].services);
        const singleService = services.find(service => service.id == serviceId);
        setDetailService(singleService);
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
            <ServiceContainer key={single.id} service={single}></ServiceContainer>
        </div>
    );
};

export default ServiceDetail;