import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Gallary from '../Gallary/Gallary';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails)
    return (
        <div className='col-span-1 md:col-span-2 lg:col-span-4 mt-20'>

            <div>
                <img src={serviceDetails?.image} alt="" className='w-full' />
            </div>
            <div>
                <h1 className="divider text-5xl py-10 text-center">{serviceDetails?.serviceName}</h1>
            </div>
            <div className="px-4">
                <Gallary photos={serviceDetails?.galaryImage}></Gallary>
            </div>
            <div className='mt-5 text-lg text-left'>
                <h1 className='text-5xl my-5'>Why Go There?</h1>
                <p>{serviceDetails?.Description_One}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                {
                    serviceDetails.feature.map(ft => {
                        return (<div className='p-2 rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
                            <div className="card h-80  bg-white">
                                <div className="card-body items-center text-justify">
                                    <h2 className="card-title mb-5">{ft?.title}</h2>
                                    <p className=''>{ft?.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to='/login' className="btn btn-primary">Login</Link>
                                        <Link to='/signup' className="btn btn-ghost">Signup</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <div className='mt-5 text-lg text-left'>
                <h1 className='text-5xl my-5'>What will amaze you?</h1>
                <p>{serviceDetails?.Description_Two}</p>
            </div>
            <div className='mt-5 text-lg text-left'>
                <h1 className='text-5xl my-5'>Make a booking NOW!</h1>
                <p>{serviceDetails?.Description_Three}</p>
            </div>
            <div mt-5>
                <div className="card border shadow-xl image-full">
                    <figure><img src={serviceDetails?.image} alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title text-5xl text-center ">All these includes Only At BDT{serviceDetails.price}</h2>

                        <div className="card-actions justify-end">
                            <button className="btn btn-lg btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <iframe className='w-full' height="400" src={serviceDetails?.video}
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default ServiceDetails;