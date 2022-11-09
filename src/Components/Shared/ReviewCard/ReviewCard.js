import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Ratings from 'react-ratings-declarative/build/ratings';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const ReviewCard = ({ review }) => {
    // const { user } = useContext(AuthContext)
    const [reviewDetails, setReviewDetails] = useState(review)
    const location = useLocation()
    console.log(reviewDetails)
    const [reload, setReload] = useState(false)
    const handleDelete = () => {
        // console.log("deleted")
        fetch('http://localhost:3001/delete-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    window.location.reload(true)
                    toast.success("Deleted Successfully")
                }
                else {
                    setReload(false)
                    toast.error("Failure : Review addition failure")
                }
            }
            )
    }
    return (
        <div>
            <div className="card border mx-auto mt-10 shadow-xl">
                {
                    review == null ? <div className='text-center text-xl'>No Review Available</div>
                        :
                        <>
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-5">
                                        <div>
                                            <div title={reviewDetails?.displayName} className="rounded-full"><img src={reviewDetails?.profileImage} alt="" style={{ width: '100px', height: '100px' }} /></div>
                                        </div>
                                        <div className="card-title text-black">{reviewDetails?.displayName} <br></br>{reviewDetails?.serviceName ? reviewDetails?.serviceName : null}</div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Rating : {parseInt(reviewDetails?.personalRating)}</span>
                                        <Ratings
                                            rating={parseInt(reviewDetails?.personalRating)}
                                            widgetRatedColors="orange"
                                            widgetSpacings='0px'
                                        >
                                            <Ratings.Widget widgetDimension="18px" />
                                            <Ratings.Widget widgetDimension="18px" />
                                            <Ratings.Widget widgetDimension="18px" />
                                            <Ratings.Widget widgetDimension="18px" />
                                            <Ratings.Widget widgetDimension="18px" />
                                        </Ratings>

                                    </div>
                                </div>
                                <p className=''>{reviewDetails?.reviewDetails}</p>
                                {
                                    location.pathname === "/my-reviews" ?
                                        <div className='flex gap-2 justify-end'>
                                            <button className='btn btn-primary' onClick={handleDelete}>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </div>
                                        :
                                        null
                                }
                            </div>

                            <Toaster />
                        </>
                }

            </div>
        </div>
    );
};

export default ReviewCard;