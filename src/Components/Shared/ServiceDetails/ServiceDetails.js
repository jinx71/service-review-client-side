import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallary from '../Gallary/Gallary';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    // console.log(serviceDetails)
    return (
        <div className='col-span-1 md:col-span-2 lg:col-span-4 mt-20'>
            <div>
                <img src={serviceDetails.image} alt="" />
            </div>
            <Gallary photos={serviceDetails.galaryImage}></Gallary>
        </div>
    );
};

export default ServiceDetails;