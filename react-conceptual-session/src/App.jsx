import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import UseState from './UseState/UseState'
import UseEffect from './UseEffect/UseEffect'
import FetchData from './UseEffect/FetchData'
import PropsDilling from './PropsDilling/PropsDilling'
import FetchhData from './UseEffect/FetchhData'


function App() {

  // let title="shape of you";
  // let views="200k"
  // let another="new title"

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <>
    <h1 className='text-5xl font-bold text-center mt-10'>Welcome to my card</h1>
          <div className='grid grid-cols-4 gap-4 px-12 '>
          {/* <Card title={title} views={views}></Card>
         <Card title={another}></Card>
         <Card></Card>
         <Card></Card> */}

         {
          data.map((Item)=><Card Newtitle={Item.name} Newviews={Item.id} key={Item.id}/>)
          
          }


          </div>
          {/* use state related*/}
          <UseState></UseState>
          <UseEffect></UseEffect>
          <FetchData></FetchData>
          <PropsDilling></PropsDilling>
          <FetchhData></FetchhData>

        
    </>
  )
}


export default App
