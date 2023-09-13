import { useEffect, useState } from 'react'

import './App.css'
import Watch from './Watch/Watch';

function App() {

const [watches,setwatches]=useState([]);

useEffect(()=>{
      fetch('Watches.json')
      .then(res=>res.json())
      .then(setwatches);
},[])
console.log(watches);


  //local object from chat gpt

  // const watches = [
  //   {
  //     name: "Classic Silver Watch",
  //     price: 199.99,
  //   },
  //   {
  //     name: "Sports Chronograph Watch",
  //     price: 249.99,
  //   },
  //   {
  //     name: "Luxury Gold Plated Watch",
  //     price: 499.99,
  //   },
  //   {
  //     name: "Smart Fitness Tracker Watch",
  //     price: 149.99,
  //   },
  //   {
  //     name: "Stylish Leather Strap Watch",
  //     price: 129.99,
  //   },
  // ];
  
 

  return (
    <>
    <div>
      {
        watches.map((item)=><Watch key={item.name} watch={item}></Watch>)
      }
    </div>

      
    </>
  )
}

export default App
