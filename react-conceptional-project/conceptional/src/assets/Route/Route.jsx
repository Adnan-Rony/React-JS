import React from 'react';
import Home from '../Components/Home/Home';
import MainLayout from '../Components/MainLayout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import Products from '../Components/Products/Products';
import Error from '../Components/Error/Error';
import Phones from '../Components/Phones/Phones';
import PhoneDetails from '../Components/PhoneDetails/PhoneDetails';

// eslint-disable-next-line no-undef
const createRouting = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('phones.json'),
            },
            {
                path:"/products",
                element:<Products></Products>
            },
            {
                path:"/phones/:id",
                element:<PhoneDetails></PhoneDetails>,
                loader:()=>fetch('phones.json')
            },
        ]
    }
])

export default createRouting;