import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const { user, logOut } = useAuth();
    console.log(user);
    const [service, setService] = useState([]);

    useEffect(() => {

        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {

                const singleService = data[0].services.filter(service => service.id === serviceId);

            });
    }, []);
    return (
        <div>
            {
                services.map(service => {
                    service.id === serviceId ?
                        (
                            <h2>{service.name}</h2>
                        ) :
                        (<></>)
                })
            }
        </div>
    );
};

export default ServiceDetail;