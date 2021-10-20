import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => await res.json())
            .then(data => await(){
                console.log(data);
                setServices(...data[0].serivces);
        console.log(data[0].serivces);
    });

}, []);
console.log(services);
return (
    <div>

    </div>
);
};

export default ServiceDetail;