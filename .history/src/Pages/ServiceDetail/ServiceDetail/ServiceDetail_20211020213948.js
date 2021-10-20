import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(...data[0].services);
                console.log(data[0].services);
            });
    }, []);
    console.log(services);
    return (
        <div>

        </div>
    );
};

export default ServiceDetail;