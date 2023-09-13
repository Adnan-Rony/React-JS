import React from 'react';
import './Bottol.css'
const Bottol = ({bolod,handleAddToCard}) => {
    const {name,price,img}=bolod;
    console.log(bolod);
    
    return (
        <div className="bottol">
          <h3>name:{name}</h3>
          {/* <h3>name:{bolod.name}</h3> */}
          <img src={img} alt="" />
          <h3>price:${price}</h3>
          <button onClick={()=>handleAddToCard(bolod)} >Purchease</button>
         
          
        </div>

            
     
    );
};

export default Bottol;