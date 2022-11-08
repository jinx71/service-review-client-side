import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../../Shared/Services/ServicesCard';

const ServicesPage = () => {

    const services = useLoaderData()
    return (
        <div className='col-span-1 md:col-span-2 lg:col-span-4'>
            <div className='grid gap-5 cols-1 px-2 md:px-0 md:grid-cols-2 lg:grid-cols-2 container mx-auto mt-20'>
                {
                    services.map(service => <ServicesCard service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;