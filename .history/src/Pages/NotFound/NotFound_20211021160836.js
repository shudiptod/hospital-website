import React from 'react';
import notFound404 from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <div className="container lg:w-8/12 border-4 border-gray-900 mx-auto">
            <img src={notFound404} />
        </div>
    );
};

export default NotFound;