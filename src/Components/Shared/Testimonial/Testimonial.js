import React, { useRef } from 'react';
import './testimonials.css'
// import person from "../../../Assets/images/testimonial/Ellipse 2.png";
// import quote from "../../../Assets/images/testimonial/quote.svg";
import { BsArrowRightShort, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
const Testimonial = () => {
    const scroll = useRef(null)
    const scrollPrev = (scrollOffset) => {
        scroll.current.scrollLeft += scrollOffset;
    };
    const services = useLoaderData()
    // const { user } = useContext(AuthContext)
    // console.log(user.email)
    const userReviews = services.map(service => service.review).flat(Infinity)
    // console.log(userReviews)
    return (
        <div className='container mx-auto w-full mt-20'>
            <div className='w-1/2  mx-auto mb-12'>
                {/* <h1 className='text-center text-xl text-primary font-bold'>Testimonial</h1> */}
                <h1 className='text-center text-5xl font-bold mt-5'>What Customer Says</h1>
                <p className='text-center text-gray-500 capitalize mt-5'>We earn this from their heart with our honest service. It's our asset not revenue.</p>
            </div>

            <div className="">
                {

                    userReviews.slice(0, 5).map(review => <ReviewCard review={review}></ReviewCard>)

                }
            </div>
        </div >
    );
};

export default Testimonial;