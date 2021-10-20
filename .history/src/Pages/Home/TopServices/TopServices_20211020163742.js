import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../Shared/Card/Card';

const TopServices = () => {
    const [services, setServices] = useState([]);
    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data[0].services));

    }, []);
    return (
        <div className="service-background mt-11 border rounded-xl shadow ">
            <h2 className="text-3xl text-center font-semibold text-white font-mono my-10">Our Priority Services for you</h2>
            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 my-3 mx-auto">
                {
                    services.map(service => {
                        if (service.id < 6) {
                            return (
                                <Card key={service.id} service={service} />
                            )
                        }
                    })
                }
            </div>

        </div >
    );
};

export default TopServices;