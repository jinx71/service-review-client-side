import React from 'react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
    return (
        <div>
            <div className="hero border w-3/4 mx-auto mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://articlesdo.com/wp-content/uploads/2021/06/maldives-visit.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Join Us Now</h1>
                        <p className="py-6">We provide premium quality travel experience for you at your comfortable budget.</p>
                        <Link to={'/login'} className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCTA;