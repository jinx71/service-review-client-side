import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
const ServiceSidebar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='col-span-1 md:col-span-2 mt-20'>
            <div className=''>
                <Calendar className='mx-auto' onChange={onChange} value={value} />
            </div>
            <div className="card mt-10 mx-5 bg-secondary text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl">Join Us Now!</h2>
                    <p>You are here for a reason.</p>
                    <div className="card-actions justify-end">
                        <Link to='/login' className="btn btn-primary">Login</Link>
                        <Link to='/signup' className="btn btn-ghost">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;