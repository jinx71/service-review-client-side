import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import Gallary from '../Gallary/Gallary';
import ReviewCard from '../ReviewCard/ReviewCard';
import './serviceDetails.css'
const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { user } = useContext(AuthContext);
    const { review } = serviceDetails
    console.log(serviceDetails.review)
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
            <div className='mt-5 text-lg text-left'>
                <h1 className='text-5xl my-5'>Add a review</h1>
                {/* <p>{serviceDetails?.Description_Three}</p> */}
            </div>
            <div className="form-control relative">
                {

                    user && user.uid ? null : <div className='absolute overlay'>
                        <div className="card  bg-transparent text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-5xl">Login To Add A Review</h2>
                                <p>You are here for a reason.</p>
                                <div className="card-actions justify-end">
                                    <Link to='/login' className="btn btn-primary">Login</Link>
                                    <Link to='/signup' className="btn btn-ghost">Signup</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                }
                <label className="label">
                    <span className="label-text text-xl">Your Review</span>
                    {/* <span className="label-text-alt">Alt label</span> */}
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Add Something"></textarea>
                <div className="form-control mt-2">
                    <button className="btn btn-primary">Add Review</button>
                </div>
            </div>
            {
                review.map(a => <ReviewCard review={a}></ReviewCard>)
            }
        </div>
    );
};

export default ServiceDetails;