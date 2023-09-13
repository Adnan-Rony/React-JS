import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';

const Home = () => {
    const[actors,setActors]=useState([]);

    const [selectedActors,setselectedActors]=useState([]);

    const [remaining,setremaining]=useState(0);

    const [totalcost,setTotalcost]=useState(0);



    useEffect(()=>{
        fetch("actors.json")
        .then(res=>res.json())
        .then(data=>setActors(data))
    },[])



    const handleSaleActor=(actorr)=>
    {
        const isExist=selectedActors.find((item)=>item.id==actorr.id);
        
        let count=actorr.salary;
        
        if(isExist)
        {
            // alert("already booked!");
           
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are already booked!',
            footer: '<a href="">Why do I have this issue?</a>'
            })
            
        }

        else{
            selectedActors.forEach(item=>
                {
                    count=count + item.salary;
                })
                // console.log(count);
                const remainingMoney=30000-count;

                if(count > 30000)
                {
                    return (
                        Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Out of Range Money',
                   
                    }) 
                )
                   
                }

                // console.log(totalMoney);
                setremaining(remainingMoney);

                setTotalcost(count);



            setselectedActors([...selectedActors,actorr]);
        }
        
   //setselectedActors([...selectedActors,actorr]); reguler way
    }



    // console.log(selectedActors);
    return (
        <div className='container mx-auto mt-10'>
           <div className='flex justify-center gap-6'>

            <div className='grid grid-cols-3 ga'>
            {
                // <h1>Total Actor:{actors.length}</h1>
                actors.map((act,index)=><div key={index}>
                <div className='gap-5'>
                <div className='border-2 p-5 rounded-md mx-0.5 '>
                <img className='w-[110px] h-[110px] rounded-full' src={act.image} alt="" />
                <h1 >Name:{act.name}</h1>
                <h1>role:{act.role}</h1>
                <h1>salary:{act.salary}$</h1>
                <h1 >country:{act.country}</h1>
               <div className='flex justify-center mt-4'>
               <button onClick={()=>handleSaleActor(act)} className='bg-[red] p-3 text-white rounded-lg'>Sale</button>
               </div>


            </div>
        
           </div>

            </div>)}

            </div>

            <div className='cart'>
                <Cart selectedActors={selectedActors} 
                remaining={remaining}
                totalcost={totalcost}></Cart>
            </div>

           </div>
                     
           
        </div>
    );
};

export default Home;