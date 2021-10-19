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
            <div className="careers h-56 w-100 text-center">
                <h2 className="text-white text-3xl font-sans font-medium">Careers</h2>
                <p className="text-white text-xl font-sans font-medium">Sunrise Medical offers excellent career and education opportunities for health professionals.</p>
            </div>

        </div>
    );
};

export default Careers;