
import './country.css'
const Country = ({countryy}) => {
    console.log(countryy);
    const {name,flags,region}=countryy;
    
    return (
        <div className='country'>
            <h3>Name:{name.common} </h3>
            <h3>Region:{region}</h3>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img  src={flags.png} alt="" />
            </div>
          
           
            
        </div>
    );
};

export default Country;