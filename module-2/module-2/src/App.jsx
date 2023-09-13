import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './user'
import UserFriend from './UserFriend'
import Posts from './hook/Posts'



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
      <hr />
      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick2}>Click Me 2</button>
     <button onClick={()=>addToFive(3)}>add to five</button>
     <hr />
     <Counter></Counter>
     <Team></Team>
    <hr />

     <User></User>
     <hr />
     {
      <div>
        <h2>React core concept Recap</h2>
        <ol>
          <li>Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>Even Handler</li>
          <li>State</li>
          <li>Load data</li>
        </ol>
        <hr />
      </div>
     
     }

    <Posts></Posts>

    </>
  )
}

export default App
