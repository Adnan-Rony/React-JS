import React from 'react';
import Home from '../Components/Home/Home';
import MainLayout from '../Components/MainLayout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';
import Products from '../Components/Products/Products';

// eslint-disable-next-line no-undef
const createRouting = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/products",
                element:<Products></Products>
            }
        ]
    }
])

export default createRouting;