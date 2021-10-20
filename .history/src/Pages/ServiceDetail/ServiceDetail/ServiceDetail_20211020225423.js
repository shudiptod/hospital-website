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




    useEffect(
        () => {
            fetch('/fakedb.json')
                .then(res => res.json())
                .then(data => setServices(data[0].services););

}, []);

//console.log(singleService);

return (
    <div>
        {
            detailService !== undefined ?
                <ServiceContainer key={detailService.id} service={detailService}></ServiceContainer>
                : <>Loadi</>
        }
    </div>
);
};

export default ServiceDetail;