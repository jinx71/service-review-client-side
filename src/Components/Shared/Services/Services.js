import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import ServicesCard from './ServicesCard';


const Services = () => {
    const services = useLoaderData()
    const { setServiceLength } = useContext(AuthContext)
    setServiceLength(services.length)

    return (
        <div>
            <div className="mt-20 w-3/4 mx-auto">
                <div className="divider text-5xl">*****</div>
                <div className='text-center text-5xl uppercase '>Our Services</div>
                <p className='text-center p-5 text-lg w-1/2 mx-auto'>We provide premium quality travel experience for you at your comfortable budget.</p>
                <div className="divider text-5xl">*****</div>
            </div>
            <div className='grid gap-5 cols-1 px-2 md:px-0 md:grid-cols-2 lg:grid-cols-2 container mx-auto mt-20'>
                {
                    services?.map(service => <ServicesCard service={service}></ServicesCard>)
                }
            </div>
            <div className="flex justify-center mt-20">
                <Link to="/services" className="btn btn-primary btn-outline">Show More</Link>
            </div>
        </div>
    );
};

export default Services;