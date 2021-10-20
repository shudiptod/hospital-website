import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const { user, logOut } = useAuth();
    console.log(user);
    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setServices(data[0].services);
            });
    }, []);
    return (
        <div>
            {
                services.filter(service => {
                    service.id === serviceId
                    return (
                        <h2>{service.name}</h2>
                    )
                })
            }
        </div>
    );
};

export default ServiceDetail;