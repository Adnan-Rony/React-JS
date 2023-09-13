import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setbookmarks]=useState([]);
  const handleAddToBookmarks=blog=>{
    // console.log(blog);
    const newBookmarkes=[...bookmarks,blog];
    setbookmarks(newBookmarkes)
  }
 

  return (
    <>
      <Header></Header>

      <main className='md:flex container mx-auto gap-4'>
     
      <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      

      </main>
    </>
  )
}

export default App
