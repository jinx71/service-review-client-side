import React, { useRef } from 'react';
import './testimonials.css'
// import person from "../../../Assets/images/testimonial/Ellipse 2.png";
// import quote from "../../../Assets/images/testimonial/quote.svg";
import { BsArrowRightShort, BsStarFill, BsStarHalf } from 'react-icons/bs';
const Testimonial = () => {
    const scroll = useRef(null)
    const scrollPrev = (scrollOffset) => {
        scroll.current.scrollLeft += scrollOffset;
    };
    return (
        <div className='container mx-auto w-3/4 mt-20'>
            <div className='w-1/2  mx-auto mb-12'>
                {/* <h1 className='text-center text-xl text-primary font-bold'>Testimonial</h1> */}
                <h1 className='text-center text-5xl font-bold mt-5'>What Customer Says</h1>
                <p className='text-center text-gray-500 capitalize mt-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="flex flex-row testimonials gap-3 mb-10" ref={scroll}>
                <div className="card p-10 border testimonial">
                    <div className="flex justify-between items-center gap-24">
                        <div className='flex justify-between items-center gap-5'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>John Doe</h2>
                                <p className='text-xl'>Businessman</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" className='w-12 ' />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className='text-gray-800'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className='text-2xl font-bold text-primary text-center flex justify-start gap-2'>

                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                        </p>
                    </div>
                </div>
                <div className="card p-10 border testimonial">
                    <div className="flex justify-between items-center gap-24">
                        <div className='flex justify-between items-center gap-5'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>John Doe</h2>
                                <p className='text-xl'>Businessman</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" className='w-12 ' />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className='text-gray-800'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className='text-2xl font-bold text-primary text-center flex justify-start gap-2'>

                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                        </p>
                    </div>

                </div>
                <div className="card p-10 border testimonial">
                    <div className="flex justify-between items-center gap-24">
                        <div className='flex justify-between items-center gap-5'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>John Doe</h2>
                                <p className='text-xl'>Businessman</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" className='w-12 ' />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className='text-gray-800'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className='text-2xl font-bold text-primary text-center flex justify-start gap-2'>

                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                            <BsStarFill></BsStarFill>
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                <div className="absolute flex justify-between transform -translate-y-1/2 -left-12 -right-12 -top-[200px]">
                    <button className="btn btn-circle hover:btn-primary mr-5" onClick={() => scrollPrev(-400)} >❮</button>
                    <button className="btn btn-circle hover:btn-primary" onClick={() => scrollPrev(400)}>❯</button>
                </div>
            </div >
        </div >
    );
};

export default Testimonial;