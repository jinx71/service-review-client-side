import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../Components/Root/Background';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';

const Main = () => {
    return (
        <>
            <Background>
                <Header></Header>
                <Outlet></Outlet>

            </Background>
            <Footer></Footer>
        </>
    );
};

export default Main;