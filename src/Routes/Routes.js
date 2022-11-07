import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/Login/Login';
import NotFound from '../Components/Pages/NotFound/NotFound';
import Services from '../Components/Pages/Services/Services';
import Signup from '../Components/Pages/Signup/Signup';
import ServiceDetails from '../Components/ServiceDetails/ServiceDetails';

import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // loader: ({ params }) => fetch('http://localhost:3001'),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: ({ params }) => fetch('https://digital-cloud-server.vercel.app/')
            },
            {
                path: "/home",
                element: <Home></Home>,
                // loader: ({ params }) => fetch('https://digital-cloud-server.vercel.app/')
            },
            {
                path: "/services",
                element: <Services></Services>,
                // loader: ({ params }) => fetch('https://digital-cloud-server.vercel.app/')
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                // loader: ({ params }) => fetch(`https://digital-cloud-server.vercel.app/courses/${params.id}`)

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
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
])