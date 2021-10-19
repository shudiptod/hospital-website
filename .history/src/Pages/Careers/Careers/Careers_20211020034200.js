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
            <div className="careers h-56 w-100 text-center flex flex-col items-center justify-evenly my-5">
                <h2 className="text-white text-5xl font-sans font-bold">Careers</h2>
                <p className="text-white text-xl font-sans font-medium">Sunrise Medical offers excellent career and education opportunities for health professionals.</p>
            </div>
            <div className="container w-12/12 min-h-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 my-3 mx-auto">

            </div>
        </div>
    );
};

export default Careers;