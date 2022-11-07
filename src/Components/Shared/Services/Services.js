import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    const card = <><div className="card lg:card-side border shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
        <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
            </div>
        </div>
    </div>
    </>
    return (
        <div>
            <div className="mt-20 w-3/4 mx-auto">
                <div className="divider text-5xl">*****</div>
                <div className='text-center text-5xl uppercase '>Our Services</div>
                <p className='text-center p-5 text-lg w-1/2 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio dolorem obcaecati perferendis, illo consequuntur omnis! Accusantium ipsam adipisci ipsum sapiente consectetur vitae qui.</p>
                <div className="divider text-5xl">*****</div>
            </div>
            <div className='grid gap-5 cols-1 px-2 md:px-0 md:grid-cols-2 lg:grid-cols-2 container mx-auto mt-20'>
                {
                    [...Array(10).keys()].map(a => card)
                }
            </div>
            <div className="flex justify-center mt-20">
                <Link className="btn btn-primary btn-outline">Show More</Link>
            </div>
        </div>
    );
};

export default Services;