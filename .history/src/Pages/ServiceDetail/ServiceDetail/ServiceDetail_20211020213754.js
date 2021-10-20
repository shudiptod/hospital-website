import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    console.log(services);
    return (
        <div>

        </div>
    );
};

export default ServiceDetail;