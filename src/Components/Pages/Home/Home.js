import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import HomeCTA from '../../Shared/HomeCTA/HomeCTA';
import LoginSignup from '../../Shared/LoginSignup/LoginSignup';
import Services from '../../Shared/Services/Services';
import Testimonial from '../../Shared/Testimonial/Testimonial';

const Home = () => {
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