import React, { useContext } from 'react';
import Ratings from 'react-ratings-declarative/build/ratings';
import { AuthContext } from '../../../Context/UserContext';

const ReviewCard = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    return (
        <div>
            <div className="card border w-3/4 mx-auto mt-10 shadow-xl">

                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-5">
                            <div>
                                <div title={user?.displayName} className="rounded-full"><img src={user?.photoURL} alt="" style={{ width: '100px', height: '100px' }} /></div>
                            </div>
                            <div className="card-title text-black">{user?.displayName}</div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span>Rating : {4.4}</span>
                            <Ratings
                                rating={4.4}
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
                    <p className=''>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;