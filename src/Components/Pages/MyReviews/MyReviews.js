import React, { useContext, useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import ReviewCard from '../../Shared/ReviewCard/ReviewCard';

const MyReviews = () => {
    const { user, signout } = useContext(AuthContext)
    useEffect(() => {
        document.title = `My Reviews : ${document.title}`;
    });
    const currentUser = {
        email: user.email
    }
    // console.log(currentUser)
    // console.log(localStorage.getItem('travel-token'))
    const [services, setServices] = useState([])
    const [a, setA] = useState(false)
    // const services = useLoaderData()
    
    // console.log(user.email)
    useEffect(() => {
        fetch(`https://travel-guide-server-jinx71.vercel.app?email=${currentUser.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('travel-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    console.log(res.status)
                    setA(false)
                    return signout();
                }
                res.status === 200 ? setA(true) : setA(false)
                return res.json();
            })
            .then(data => {
                setServices(data);
            })
    }, [user?.email, signout])

    const userReviews = services.map(service => service.review).flat(Infinity)
    // console.log(userReviews)


    return (
        <div className='pb-20'>
            <div>

                {

                    userReviews.map(review => review?.email === user?.email ? <ReviewCard review={review}></ReviewCard> : null)

                }
            </div>
            <div>
                {
                    a ===false && <div className='text-5xl text-center flex justify-center items-center h-1/2'>No review Available</div>
                }
            </div>
        </div>
    );
};

export default MyReviews;