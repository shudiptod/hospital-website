import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(
        () => {
            fetch('./fakedb.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data[0].services);
                    setServices(...data[0].services);
                    console.log(data[0].services);
                });
        }, []);
    console.log(services);
    return (
        <div>
            services.map(service=> <h2>{serviceId.name}</h2>)
        </div>
    );
};

export default ServiceDetail;