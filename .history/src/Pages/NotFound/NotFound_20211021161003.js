import React from 'react';
import notFound404 from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <div className="container lg:h-96 lg:w-6/12  mx-auto">
            <img src={notFound404} className="h-full w-full mx-auto" />
        </div>
    );
};

export default NotFound;