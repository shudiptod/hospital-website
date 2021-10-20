import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState({});

    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data[0].services));

    }, []);
    console.log(services);
    return (
        <div>
            {
                services.map(service => {
                    if (service.id === serviceId) {
                        return (
                            <h2 className="text-blue-900 text-4xl">{service.name}</h2>
                        )
                    }
                })
            }
        </div>
    );
};

export default ServiceDetail;