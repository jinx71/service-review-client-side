import React, { useEffect } from 'react';
import Banner from '../../Shared/Banner/Banner';
import HomeCTA from '../../Shared/HomeCTA/HomeCTA';
import LoginSignup from '../../Shared/LoginSignup/LoginSignup';
import Services from '../../Shared/Services/Services';
import Testimonial from '../../Shared/Testimonial/Testimonial';

const Home = () => {

    useEffect(() => {
        document.title = `Home : ${document.title}`;
    });
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeCTA></HomeCTA>
            <Testimonial></Testimonial>
            <LoginSignup></LoginSignup>
        </div>
    );
};

export default Home;