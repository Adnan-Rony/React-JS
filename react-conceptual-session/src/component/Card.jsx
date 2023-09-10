// eslint-disable-next-line no-unused-vars
import React from 'react';


const Card = (props) => {
    console.log(props);
    // const title="Shape of You";
    // const myobj={
    //     views:"200k"
    // }
    return (
        <div>
        
           <div className="card w-full bg-base-100 shadow-xl ">
          
           <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Shoes" /></figure>

           {/* <h1>{props.views}</h1> */}

           <h1>{props.Newviews}</h1>

           <div className="card-body">

            {/* <h2 className="card-title">{props.title}</h2> */}
            
            <h2 className="card-title">{props.Newtitle}</h2>
          
            <div className="card-actions justify-center">
            <button className="btn btn-primary">Play</button>
        </div>
        </div>
          
        
        </div>
            
        </div>
    );
};

export default Card;