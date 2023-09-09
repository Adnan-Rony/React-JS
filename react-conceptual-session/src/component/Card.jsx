// eslint-disable-next-line no-unused-vars
import React from 'react';
import Views from './Views';
import Title from './title';
import Imagee from './Imagee';

const Card = () => {
    return (
        <div>
          

           <div className="card w-full bg-base-100 shadow-xl ">
          
           <Imagee></Imagee>
           <Views></Views>
           <Title></Title>
          
        
        </div>
            
        </div>
    );
};

export default Card;