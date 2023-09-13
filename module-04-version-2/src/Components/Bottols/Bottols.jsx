import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'

const Bottols = () => {
    const [bottols,setbottols]=useState([])

    const [card,setCard]=useState([])


    useEffect(()=>{
        fetch('bottols.json')
        .then(res=>res.json())
        .then(setbottols);
    },[])

        const handleAddToCard=(bottle)=>{
            // console.log(bottle);
            const newCard=[...card,bottle];
            setCard(newCard)
        }





    return (
        <div>
            <h1>bottols:{bottols.length}</h1>
            <h3>CARD:{card.length}</h3>
         <div className="bottol-container">
         {
                bottols.map((bottol,index)=>
                <Bottol key={index}
                 bolod={bottol}
                 handleAddToCard={handleAddToCard}
                 >  </Bottol>
                
                
                )
                
            }
            
         </div>
        </div>
    );
};

export default Bottols;