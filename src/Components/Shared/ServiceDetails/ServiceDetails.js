import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailsBanner from '../ServiceDetailsBanner/ServiceDetailsBanner';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    // console.log(serviceDetails)
    return (
        <>

            <div className='col-span-1 md:col-span-2 lg:col-span-4'>
                this is service details
            </div>
        </>
    );
};

export default ServiceDetails;