import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import ReviewCard from '../../Shared/ReviewCard/ReviewCard';

const MyReviews = () => {

    const services = useLoaderData()
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const userReviews = services.map(service => service.review).flat(Infinity)
    // console.log(userReviews)
    let a = false


    return (
        <div>
            <div>

                {

                    userReviews.map(review => review.email === user.email ? <ReviewCard review={review}></ReviewCard> : null)

                }
            </div>
            <div>
                {
                    a && <div className='text-5xl text-center flex justify-center items-center h-1/2'>No review Available</div>
                }
            </div>
        </div>
    );
};

export default MyReviews;