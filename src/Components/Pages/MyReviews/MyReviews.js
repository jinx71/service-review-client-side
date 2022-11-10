import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import ReviewCard from '../../Shared/ReviewCard/ReviewCard';

const MyReviews = () => {
    useEffect(() => {
        document.title = `My Reviews : ${document.title}`;
    });
    const [services, setServices] = useState([])
    // const services = useLoaderData()
    const { user, signout } = useContext(AuthContext)
    // console.log(user.email)
    useEffect(() => {
        fetch(`https://travel-guide-server-jinx71.vercel.app/services?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return signout();
                }
                return res.json();
            })
            .then(data => {
                setServices(data);
            })
    }, [user?.email, signout])

    const userReviews = services.map(service => service.review).flat(Infinity)
    // console.log(userReviews)
    let a = false


    return (
        <div>
            <div>

                {

                    userReviews.map(review => review?.email === user?.email ? <ReviewCard review={review}></ReviewCard> : null)

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