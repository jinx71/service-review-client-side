import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddService from '../Components/Pages/AddService/AddService';
import Blog from '../Components/Pages/Blog/Blog';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/LoginPage/LoginPage';
import MyReviews from '../Components/Pages/MyReviews/MyReviews';
import NotFound from '../Components/Pages/NotFound/NotFound';
import ServicesPage from '../Components/Pages/ServicesPage/ServicesPage';
import SignupPage from '../Components/Pages/SignupPage/SignupPage';
import PrivateRoute from '../Components/Shared/PrivateRoute/PrivateRoute';
import ServiceDetails from '../Components/Shared/ServiceDetails/ServiceDetails';

import Main from '../Layout/Main';
import ServiceLayout from '../Layout/ServiceLayout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        loader: ({ params }) => fetch(''),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ({ params }) => fetch('http://localhost:3001/')
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: ({ params }) => fetch('http://localhost:3001/')
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignupPage></SignupPage>
            },
            {
                path: "/my-reviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },

        ]
    },
    {
        path: "/services",
        element: <ServiceLayout></ServiceLayout>,
        loader: ({ params }) => fetch('http://localhost:3001/services'),
        children: [
            {
                path: "/services",
                element: <ServicesPage></ServicesPage>,
                loader: ({ params }) => fetch('http://localhost:3001/services'),
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:3001/services/${params.id}`),
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
])