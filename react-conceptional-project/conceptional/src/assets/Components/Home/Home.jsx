import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Phones from '../Phones/Phones';
import Banner from '../Banner/Banner';
const Home = () => {

const phone =useLoaderData();
console.log(phone);



    
    return (
        <div className='mt-10'>
            

        <Banner></Banner>

    <div className='mt-10 mb-10'>
        <h1 className='text-center font-bold text-4xl'>Our Phones Collections</h1>
    </div>
    

    <div className='grid grid-cols-3 gap-4'>
    {
        phone ?.map((phone,index)=><Phones key={index} phones={phone}></Phones>)
    }
        
    </div>


        </div>
    );
};

export default Home;