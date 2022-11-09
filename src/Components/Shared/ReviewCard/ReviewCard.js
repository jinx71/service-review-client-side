import React, { useContext } from 'react';
import Ratings from 'react-ratings-declarative/build/ratings';
import { AuthContext } from '../../../Context/UserContext';

const ReviewCard = ({ review }) => {
    // const { user } = useContext(AuthContext)
    console.log(review)
    return (
        <div>
            <div className="card border mx-auto mt-10 shadow-xl">

                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-5">
                            <div>
                                <div title={review?.displayName} className="rounded-full"><img src={review?.profileImage} alt="" style={{ width: '100px', height: '100px' }} /></div>
                            </div>
                            <div className="card-title text-black">{review?.displayName}</div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span>Rating : {parseInt(review?.personalRating)}</span>
                            <Ratings
                                rating={parseInt(review?.personalRating)}
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
                    <p className=''>{review?.reviewDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;