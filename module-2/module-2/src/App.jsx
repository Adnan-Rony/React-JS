import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'


function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2=()=>{
    alert("button 2 clicked")
  }
  // when onclick function has a parameter
  const addToFive=(num)=>{
    alert(num+5)
  }

  return (
    <>
      <h3>React core concepts modle-02</h3>
      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick2}>Click Me 2</button>
     <button onClick={()=>addToFive(3)}>add to five</button>
     <Counter></Counter>
     <Team></Team>
    </>
  )
}

export default App
