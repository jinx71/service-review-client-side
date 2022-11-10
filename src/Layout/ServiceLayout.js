import React from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Background from '../Components/Root/Background';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';
import ServiceDetailsBanner from '../Components/Shared/ServiceDetailsBanner/ServiceDetailsBanner';
import ServiceSidebar from '../Components/Shared/ServiceSidebar/ServiceSidebar';
import image from '../Asset/Banner.webp';
const ServiceLayout = () => {
    const serviceDetails = useLoaderData()
    // console.log(serviceDetails)
    const location = useLocation()
    console.log(location)
    return (
        <>
        <Background>
            <Header></Header>
            <div className='container p-2 w-full mx-auto'>
                {
                    location.pathname.split('/').length === 2 ? <ServiceDetailsBanner image={image} title={'Services...'}></ServiceDetailsBanner>
                        :
                        location.pathname.split('/').length === 3 ?
                            <ServiceDetailsBanner image={serviceDetails.find(service => service._id == location.pathname.split('/')[2]).image} title={serviceDetails.find(service => service._id == location.pathname.split('/')[2]).serviceName}></ServiceDetailsBanner>


                            : null
                }
            </div>
            <div className='container w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5'>
                <Outlet></Outlet>
                <ServiceSidebar></ServiceSidebar>
            </div>
            
        </Background >
        <Footer></Footer>
        </>
    );
};

export default ServiceLayout;