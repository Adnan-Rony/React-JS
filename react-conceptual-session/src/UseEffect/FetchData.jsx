import { useEffect, useState } from "react";


const FetchData = () => {
    const [data,setdata]=useState([]);

    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                const URL=`https://openapi.programming-hero.com/api/videos/category/1000`
                const res=await fetch(URL)
                const data=await res.json();
                // console.log(data);
                setdata(data.data);
                
                    




            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    },[])
      console.log(data);


    return (
        <div className="">
            {
                data.map((item)=>(
         // eslint-disable-next-line react/jsx-key
         <div>
            
            <h1 className="text-center mt-10 text-3xl">{item.category_id}</h1>
            <h1 className="text-center mt-10 text-3xl">{item.title}</h1>
         </div>
                   

                    


             ))
                
            }
            
        </div>
    );
};

export default FetchData;