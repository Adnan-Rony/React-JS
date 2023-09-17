import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ai";
const Features = ({features}) => {
    
    return (
        <div>
            <p className='flex items-center gap-2'>
                <RiVerifiedBadgeFill></RiVerifiedBadgeFill>
                {features}</p>
            
        </div>
    );
};

export default Features;