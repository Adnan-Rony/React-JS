import React from 'react';

const Cart = ({selectedActors,remaining,totalcost}) => {
   
    // console.log(selectedActors);
    return (
        <div>
            <h1 className='text-3xl font-bold '>Total Actor:{selectedActors.length}</h1> <br />

            <h1 className='text-3xl font-bold'>Remaining Money:{remaining} $</h1> <br />

            <h1 className='text-3xl font-bold'>Total Cost:{totalcost} $</h1> <br />

            <hr className='border-2 '/>
            {
                selectedActors.map((actorrr,index)=>(
                    <div className='text-2xl font font-semibold' 
                          key={index}>
                         {actorrr.name}
                         {/* <li >{actorrr.salary}$</li> */}
                         
                         </div>
                ))

            }
            
        </div>
    );
};

export default Cart;