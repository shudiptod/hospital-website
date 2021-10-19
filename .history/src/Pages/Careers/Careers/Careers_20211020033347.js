import React, { useEffect, useState } from 'react';
import './Careers.css';
const Careers = () => {


    const [careers, setCarees] = useState([]);
    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setCarees(data[0].careers);
            });
    }, []);
    return (
        <div>
            <div className="careers h-56 w-100">

            </div>

        </div>
    );
};

export default Careers;