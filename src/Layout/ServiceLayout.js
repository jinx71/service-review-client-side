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
    console.log(serviceDetails)
    const location = useLocation()
    console.log(location)
    return (
        <Background>
            <Header></Header>
            <div className='container p-2'>
                {
                    location.pathname.split('/').length === 2 ? <ServiceDetailsBanner image={image} title={'Services...'}></ServiceDetailsBanner>
                        :
                        location.pathname.split('/').length === 3 ?
                            <ServiceDetailsBanner image={serviceDetails.find(service => service.id == location.pathname.split('/')[2]).image} title={serviceDetails.find(service => service.id == location.pathname.split('/')[2]).serviceName}></ServiceDetailsBanner>


                            : null
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5'>
                <Outlet></Outlet>
                <ServiceSidebar></ServiceSidebar>
            </div>
            <Footer></Footer>
        </Background >
    );
};

export default ServiceLayout;