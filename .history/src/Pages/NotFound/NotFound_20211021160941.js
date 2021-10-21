import React from 'react';
import notFound404 from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <div className="container lg:h-96 lg:w-8/12 border-4 border-gray-900 mx-auto">
            <img src={notFound404} className="h-full w-full mx-auto" />
        </div>
    );
};

export default NotFound;