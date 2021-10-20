import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const { user, logOut } = useAuth();
    const [service, setService] = useState({});

    useEffect(() => {

        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const allServices = data[0].services;
                console.log(allServices)
                const singleService = allServices.filter(service => service.id === serviceId)
                setService(singleService);
                console.log(singleService);
            });
    }, [service]);
    return (
        <div>
            {
                service.name
            }
        </div>
    );
};

export default ServiceDetail;