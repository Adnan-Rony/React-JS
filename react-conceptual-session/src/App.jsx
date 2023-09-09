import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {


  return (
    <>
    <h1 className='text-5xl font-bold text-center mt-10'>Welcome to my card</h1>
          <div className='grid grid-cols-4 gap-4 px-12 '>
          <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
          </div>
        
    </>
  )
}


export default App
