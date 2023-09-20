import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import Dashboard from '../Components/Dashboard/Dashboard';

const mycreateRoute=createBrowserRouter([
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
            },
            {
                path:"/Dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default mycreateRoute;