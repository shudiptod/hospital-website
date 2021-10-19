import React from 'react';

const Career = () => {
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

        </div>
    );
};

export default Career;