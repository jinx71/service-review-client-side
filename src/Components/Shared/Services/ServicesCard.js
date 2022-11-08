import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service, handleClick }) => {
    const trim = (abc) => {
        if (abc.length > 100) {
            return abc.substring(0, 99) + "..."
        }
        else {
            return abc
        }
    }
    return (
        <div>
            <div className="card  border shadow-xl">
                <figure><img src={service.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.serviceName}</h2>
                    <p>{trim(service.Description)}</p>
                    <p className='text-lg font-bold'>Price : BDT {service.price}</p>
                    <div className="card-actions justify-between items-center">
                        <p className='text-[#757575]'>Rating : {service.rating}</p>
                        <Link to={`/services/${service.id}`} className="btn btn-primary" onClick={() => handleClick(service.id)}>View Details</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;