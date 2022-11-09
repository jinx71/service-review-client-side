import React from 'react';
import Slider from "react-slick";

const Banner = () => {

    return (

        <>
            <div className="carousel w-full h-96 mt-10">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/FKG8gCz/1592076406.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://thegreenpagebd.com/wp-content/uploads/2019/12/1-2.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://articlesdo.com/wp-content/uploads/2021/06/maldives-visit.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/24/146502.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </>

    );
};

export default Banner;