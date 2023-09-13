import { useEffect, useState } from "react"
import UserFriend from "./UserFriend";

export default function User()
{
    const [user,setUser]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
        console.log(setUser);

    },[])

    return (
        <div>
         
          {
       

          }

        </div>
    )
}

/*
  1.declear a state to hold the data.
  2.use effect with call back effect

  
  
 */