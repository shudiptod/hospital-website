import React from 'react';

const Careers = () => {
    const [careers, setServices] = useState([]);
    useEffect(async () => {

        await fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setServices(data[0].careers);
            });
    }, []);
    return (
        <div>

        </div>
    );
};

export default Careers;