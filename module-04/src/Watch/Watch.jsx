import React from 'react';

const Watch = ({watch}) => {
    
    const {name,price}=watch;
    return (
        <div>
            <h3>Watch:{name}</h3>
            {/* <h4>Watch:{watch.name}</h4> */}
            {/* <p>price:{watch.name}</p> */}
            <p>price:{price}</p>
            
        </div>
    );
};

export default Watch;