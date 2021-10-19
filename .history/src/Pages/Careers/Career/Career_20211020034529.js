import React from 'react';

const Career = (props) => {
    const { id, name, details } = props.career;
    return (
        <div className="container mx-auto lg:w-5/6 md:w-6/6 sm:w-5/6 h-full bg-gray-50 filter drop-shadow shadow-2xl border rounded-xl mt-7">
            <div className="container mx-auto w-full px-1 py-2 flex flex-col items-center">
                <h3 className="text-lg text-center text-gray-900 font-mono mb-5">{name}</h3>
                <p className="text-sm font-serif font-semibold text-gray-800 mb-2 w-10/12">{details.substring(0, 100) + '...'}</p>

                <button className=" px-4 py-2 leading-normal text-sm text-white font-semibold bg-blue-600  rounded-3xl
                border hover:border-indigo-800  hover:bg-blue-900 mt-7 mb-5">Learn More</button>

            </div>
        </div >
    );
};

export default Career;