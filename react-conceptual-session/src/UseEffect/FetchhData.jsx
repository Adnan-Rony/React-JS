import { useEffect, useState } from "react";


const FetchhData = () => {

    const[dataa,setdata]=useState([]);

    
        useEffect(()=>{
            const fetchData=async()=>{
                const URL=`https://openapi.programming-hero.com/api/videos/category/1000`
                const response=await fetch(URL);
                const data= await response.json();
                // console.log(data.data);
                setdata(data.data);
            }
            fetchData();
          
        },[])
        // one by one data remove
        console.log(dataa);
        const singleremoveImage=(thumbnail)=>{
            const filterData=dataa.filter((itemm)=>itemm.thumbnail !=thumbnail);
            setdata(filterData)
        }
        // all data removed
        const handleAllRemove =()=>{
            setdata([]);
        }
        
  

    return (
        <div>
               <div className="text-center m-5">
                <button onClick={handleAllRemove } className="btn btn btn-secondary ">Remove All</button>
                </div>
        {
            dataa.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <div className="flex justify-center">
                     

                   <div>
                   <img  className="w-96" src={item.thumbnail} alt="" />
                     <h1>{item.title}</h1>
                     
                     <h2>{item.others.views}</h2>
                     
                     <button onClick={()=>singleremoveImage(item.thumbnail)} className="btn btn btn-secondary m-10 mx-auto">Remove Image</button>
                   </div>
                </div>
            ))
        }
          
            
            
        </div>
    );
};

export default FetchhData;