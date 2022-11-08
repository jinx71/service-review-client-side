import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';
import './serviceCard.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServicesCard = ({ service, handleClick }) => {
    const trim = (abc) => {
        if (abc.length > 100) {
            return abc.substring(0, 99) + "..."
        }
        else {
            return abc
        }
    }
    const serviceRating = (rating, id) => {
        let total = 0
        let totalReviews = 0
        for (const key in rating) {
            total = total + parseInt(key) * parseInt(rating[key]);
            totalReviews = totalReviews + parseInt(rating[key])
        }
        return (total / totalReviews)
    }
    return (
        <div>
            <div className="card  border shadow-xl">
                <PhotoProvider>
                    <PhotoView src={service.image}>
                        <img src={service.image} className="homeServiceSectionImage" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{service.serviceName}</h2>
                    <p>{trim(service.Description_One)}</p>
                    <p className='text-lg font-bold'>Price : BDT {service.price}</p>
                    <div className="card-actions justify-between items-center">
                        <Ratings
                            rating={serviceRating(service.rating)}
                            widgetRatedColors="orange"
                            widgetSpacings='0px'
                        >
                            <Ratings.Widget widgetDimension="18px" />
                            <Ratings.Widget widgetDimension="18px" />
                            <Ratings.Widget widgetDimension="18px" />
                            <Ratings.Widget widgetDimension="18px" />
                            <Ratings.Widget widgetDimension="18px" />
                        </Ratings>
                        <Link to={`/services/${service.id}`} className="btn btn-primary" onClick={() => handleClick(service.id)}>View Details</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;