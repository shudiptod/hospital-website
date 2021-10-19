import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            this is service {serviceId}
        </div>
    );
};

export default ServiceDetail;