
import { useState } from 'react';
import './country.css'
const Country = ({countryy}) => {
    console.log(countryy);
    const {name,flags,region,population,area,cca3}=countryy;

        const [Visited,SetVisited]=useState(false);
        const handleVisited=()=>{
            SetVisited(!Visited);
        }
    
    return (
        <div className='country'>
              <img  src={flags.png} alt="" />
            <h3>Name:{name.common} </h3>
            <h3>Region:{region}</h3>
            <h3>population={population}</h3>
            <h3>area={area}</h3>
            <h3>Code={cca3}</h3>
            <button onClick={handleVisited} >Visited</button>

            {Visited ?'  i have visited this country': 'I want to visit'}
            
          
           
          
           
            
        </div>
    );
};

export default Country;