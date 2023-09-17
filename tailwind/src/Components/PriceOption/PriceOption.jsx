import React from 'react';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    
    const {name,price,features}=option
    return (
        <div className='bg-blue-300 rounded-lg space-y-5 p-5  text-black'>
            <h2 className='text-center font-bold'>
                <span className='text-3xl '>${price}</span>
                <span className='text-xl'>/month</span>
            </h2>
            <h3 className='text-3xl font-semibold text-center'>{name}</h3>
           {
            features.map((features,index)=><Features features={features} key={index}></Features>)
           }
            
        </div>
    );
};

export default PriceOption;