import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Ratings from 'react-ratings-declarative/build/ratings';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const ReviewCard = ({ review }) => {
    const { user } = useContext(AuthContext)
    const [reviewDetails, setReviewDetails] = useState(review)
    const location = useLocation()
    console.log(reviewDetails)
    const [reload, setReload] = useState(false)
    const handleDelete = () => {
        // console.log("deleted")
        fetch('https://travel-guide-server-jinx71.vercel.app/delete-review', {
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
    const handleedit = (event) => {
        event.preventDefault();
        const reviewObject = {}

        reviewObject["email"] = user.email
        reviewObject["personalRating"] = event.target.rating.value
        reviewObject["reviewDetails"] = event.target.review.value
        reviewObject["serviceName"] = reviewDetails.serviceName
        console.log(reviewObject)
        // console.log("deleted")
        fetch('https://travel-guide-server-jinx71.vercel.app/edit-review', {
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
                    window.location.reload(true)
                    toast.success("Updated Successfully")
                }
                else {
                    setReload(false)
                    toast.error("Failure : Update failure")
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
                                        <div className="card-title text-black">
                                            {reviewDetails?.date}<br></br>{reviewDetails?.displayName} <br></br>{reviewDetails?.serviceName ? reviewDetails?.serviceName : null}</div>
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
                                            <a className='btn btn-primary' href="#editModal">Edit</a>
                                        </div>
                                        :
                                        null
                                }
                                <div>


                                    <div className="modal" id="editModal">
                                        <div className="modal-box">
                                            <form>
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
                                                    <button className="btn btn-primary" onClick={handleedit}>Edit Review</button>

                                                </div>
                                                <div className="modal-action form-control mt-2">
                                                    <button className="btn btn-primary">Cancel Edit</button>

                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Toaster />
                        </>
                }

            </div>
        </div >
    );
};

export default ReviewCard;