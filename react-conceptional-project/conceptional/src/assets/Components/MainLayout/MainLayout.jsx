import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
              <section className='flex  justify-between px-10 shadow-md py-6' >
                <div>
                    <h1 className='text-4xl font-extrabold'>AMAZON</h1>
                </div>
    
           <nav>
            <ul className='flex gap-5 text-blue-500'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/Dashboard">Dashboard</a>
                </li>
            </ul>
           </nav>
    

   
        
        </section>

        <section className='container mx-auto'>
        <Outlet ></Outlet>
        </section>
        

       

        </div>
    );
};

export default MainLayout;