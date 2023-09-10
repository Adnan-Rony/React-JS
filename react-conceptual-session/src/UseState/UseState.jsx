import { useState } from "react";


const UseState = () => {

        //handle button related
        const [value,setValue]=useState(0);
        console.log(value);

        const handleAdd = ()=>{
            setValue(value+1);
        }
        const handleRemove = () =>{
            setValue(value -1);
        }
        // array related
        const arrayOfObjects = [
            { id: 1, name: "John" },
            { id: 2, name: "Alice" },
            { id: 3, name: "Bob" },
            { id: 4, name: "Eve" },
            { id: 5, name: "Charlie" },
            { id: 6, name: "Grace" },
            { id: 7, name: "David" },
            { id: 8, name: "Sophia" },
            { id: 9, name: "Oliver" },
            { id: 10, name: "Mia" },
            
          ];
          const [data,setdata]=useState(arrayOfObjects);

          const handleRemoveall =()=>{
            setdata([]);
          }
          const SingleRemove=(id)=>{
            const filterData=data.filter((item)=>item.id != id);
            setdata(filterData);


          };
          

    return (
        <div>
            <h1 className="text-3xl font-bold mt-20 text-center">Exploying hook</h1>
            <hr />
          <div className="text-center space-x-5 m-20 gap-5 space-y-6 ">

            <h1 className="text-5xl font-bold">Count:{value}</h1>

          <button onClick={handleAdd} className="btn btn btn-primary">Add</button>

          {/* shortcut method
           <button onClick={()=>{setValue(value+1)}} className="btn btn btn-primary">Addd</button> */}

         


        <button onClick={handleRemove} className="btn btn btn-danger">Remove</button>

        {/* shortcut
         <button onClick={()=>{setValue(value-1)}} className="btn btn btn-danger">Removee</button> */}
          </div>




          {/* array related */}
         

          <div className="m-15">
            {
                data.map((item,index)=>(
                    
                    // eslint-disable-next-line react/jsx-key
                    <div key={index} className="text-center space-y-5">
                    <h1 className="text-3xl text-center">name:{item.name}</h1>
                    <button onClick={()=>SingleRemove(item.id)} className="btn btn btn-primary text-center">Remove</button>
                </div>
                ))}
                <div className="text-center m-5">
                <button onClick={handleRemoveall } className="btn btn btn-secondary ">Remove All</button>
                </div>


          </div>
            
        </div>
        
    );
};

export default UseState;