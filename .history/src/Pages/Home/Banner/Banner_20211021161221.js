import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import './Banner.css';
const fadeImages = [
    {
        url: 'https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg',
        caption: 'First Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        caption: 'Second Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80',
        caption: 'Third Slide'
    },
];
const Banner = () => {
    return (
        <div className="slide-container container w-100 mx-auto my-3 banner sm:h-full">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container w-full height-modify  mx-auto">
                            <img className="w-full h-full" src={fadeImage.url} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Banner;