import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import Gallary from '../Gallary/Gallary';
import ReviewCard from '../ReviewCard/ReviewCard';
import toast, { Toaster } from 'react-hot-toast';
import './serviceDetails.css'
const ServiceDetails = () => {
    const abc = useLoaderData()
    const [serviceDetails, setServiceDetails] = useState(abc)
    // console.log(abc);

    // setServiceDetails(12)
    console.log(serviceDetails)
    const [reload, setReload] = useState(false)
    const { user } = useContext(AuthContext);
    // console.log(user)
    const { review } = serviceDetails
    // console.log(serviceDetails.review)
    const handleSubmit = (event) => {
        event.preventDefault();
        const reviewObject = {}
        reviewObject["profileImage"] = user.photoURL
        reviewObject["displayName"] = user.displayName
        reviewObject["email"] = user.email
        reviewObject["personalRating"] = event.target.rating.value
        reviewObject["reviewDetails"] = event.target.review.value
        reviewObject["_id"] = serviceDetails._id
        reviewObject["serviceName"] = serviceDetails.serviceName
        console.log(reviewObject)
        fetch('https://travel-guide-server-jinx71.vercel.app/add-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setReload(true)
                    toast.success("Review Added Successfully")
                }
                else {
                    setReload(false)
                    toast.error("Failure : Review addition failure")
                }
            }
            )
    }
    useEffect(() => {
        fetch(`https://travel-guide-server-jinx71.vercel.app/services/${serviceDetails._id}`)
            .then(res => res.json())
            .then(data => {
                setServiceDetails(data)
            })
    }, [reload, serviceDetails._id, setServiceDetails])
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
                <form onSubmit={handleSubmit}>
                    <label className="label">
                        <span className="label-text text-xl">Your Review</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                    <div className="form-control flex flex-row justify-start items-center">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Review</span>
                        </label>
                        <textarea name="review" className="textarea textarea-bordered h-24" placeholder="Add Something"></textarea>
                    </div>

                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Add Review</button>
                    </div>
                </form>
            </div>
            {
                review?.sort(function (a, b) { return new Date(b.date) - new Date(a.date) }).map(a => <ReviewCard review={a}></ReviewCard>)
            }
            {/* <Toaster /> */}
        </div>
    );
};

export default ServiceDetails;