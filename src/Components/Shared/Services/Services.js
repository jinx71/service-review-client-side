import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData()
    const handleClick = (id) => {

    }
    // console.log(services)
    return (
        <div>
            <div className="mt-20 w-3/4 mx-auto">
                <div className="divider text-5xl">*****</div>
                <div className='text-center text-5xl uppercase '>Our Services</div>
                <p className='text-center p-5 text-lg w-1/2 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio dolorem obcaecati perferendis, illo consequuntur omnis! Accusantium ipsam adipisci ipsum sapiente consectetur vitae qui.</p>
                <div className="divider text-5xl">*****</div>
            </div>
            <div className='grid gap-5 cols-1 px-2 md:px-0 md:grid-cols-2 lg:grid-cols-2 container mx-auto mt-20'>
                {
                    services.map(service => <ServicesCard service={service} handleClick={handleClick}></ServicesCard>)
                }
            </div>
            <div className="flex justify-center mt-20">
                <Link className="btn btn-primary btn-outline">Show More</Link>
            </div>
        </div>
    );
};

export default Services;