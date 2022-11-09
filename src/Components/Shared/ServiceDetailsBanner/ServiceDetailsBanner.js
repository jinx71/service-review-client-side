import React from 'react';
import './ServiceDetailsBanner.css'
const ServiceDetailsBanner = ({ image, title }) => {
    return (
        <div className='relative w-full'>
            <div className='absolute gradient'></div>
            <img src={image} alt="" className='bannerImage' srcset="" />
            <h1 className='absolute capitalize top-1/4 left-2/4 text-5xl serviceHeading text-white font-bold'>{title}</h1>
        </div>
    );
};

export default ServiceDetailsBanner;