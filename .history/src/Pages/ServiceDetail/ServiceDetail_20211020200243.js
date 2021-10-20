import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { user, logOut } = useAuth();
    console.log(user);
    const [services, setServices] = useState([]);
    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setServices(data[0].services);
            });
    }, []);
    return (
        <div>
            this is service {serviceId}
        </div>
    );
};

export default ServiceDetail;