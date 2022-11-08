import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails)
    return (
        <div>
            This is service details
        </div>
    );
};

export default ServiceDetails;