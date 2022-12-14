import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../../Shared/Services/ServicesCard';

const ServicesPage = () => {
    useEffect(() => {
        document.title = `Services : ${document.title}`;
    });
    const services = useLoaderData()
    // console.log(services)
    return (
        <div className='col-span-1 md:col-span-2 lg:col-span-4 pb-20'>
            <div className='grid gap-5 cols-1 px-2 md:px-0 md:grid-cols-2 lg:grid-cols-2 container mx-auto mt-20'>
                {
                    services.map(service => <ServicesCard service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;