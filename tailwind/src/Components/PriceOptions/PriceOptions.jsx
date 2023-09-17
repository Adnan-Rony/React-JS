import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

   const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30,
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "One complimentary fitness class per month"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 60,
          "features": [
            "Access to all gym equipment",
            "Unlimited fitness classes",
            "Personal trainer sessions (2/month)",
            "Access to sauna and spa facilities",
            "Nutritional consultation"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 100,
          "features": [
            "Access for two adults and two children",
            "Family-friendly fitness classes",
            "Childcare services",
            "Access to swimming pool",
            "Discounts on additional personal training sessions"
          ]
        },
        
        
      ]
      
    return (
        <div>
          <h2 className='text-4xl'>Best Prices:</h2>
          <div className='grid grid-cols-3 gap-3 mt-8'>
          {
            PriceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
          }
          </div>
            
        </div>
    );
};

export default PriceOptions;