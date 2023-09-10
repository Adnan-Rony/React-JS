import { useEffect, useState } from "react";


const UseEffect = () => {

    const [value,setvalue]=useState(0);


    useEffect(()=>{
            console.log("adnan");
    },[]);
    const handleAdd=()=>{
        setvalue(value+1);
    }

    return (
        <div className="text-center space-y-5">
            <h1 className="text-5xl font-bold text-center">count:{value}</h1>
            <button onClick={handleAdd} className="btn btn btn-secondary">ADD</button>
            
            <button onClick={()=>{setvalue(value-1)}} className="btn btn btn-ghost">REMOVE</button>
            
        </div>
    );
};

export default UseEffect;