/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import mycreateRoute from './Route/Route'


// const mycreateRoute=createBrowserRouter([
//   {
//     path:"/",
//     element:<div>this is my home route</div>
//   },
//   {
//     path:"/products",
//     element:<div>my producs</div>
//   },
//   {
//     path:"/about",
//     element:<div>my about</div>
//   }
// ]);






// const mycreateRoute=createBrowserRouter([
//   {
//     path:"/",
//     element:<section >
    
//       <h1>this is fixed section</h1>

//       <Outlet></Outlet>
//     </section>,
//     children:[
//       {
//         path:"/",
//         element:<div>this is home page.</div>
//       },
//       {
//         path:"/products",
//         element:<div>this is products</div>
//       }
//     ]

//   }
// ])


// const mycreateRoute=createBrowserRouter([
//   {
//     path:"/",
//     element:<MainLayout></MainLayout>,
//     children:[
//       {
//         path:"/",
//         element:<Home></Home>
//       },
//       {
//         path:"/products",
//         element:<Products></Products>
//       },
//     ]

//   }
// ])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
  <RouterProvider router={mycreateRoute}>

  </RouterProvider>


  </React.StrictMode>,
)
