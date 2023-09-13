import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmarks}) => {
    const [blogs,setblogs]=useState([])
            useEffect(()=>{
                fetch('Blog.json')
                .then(res=> res.json())
                .then(data=>setblogs(data))
            },[])
            
    return (
        <div className="w-2/3">

            {/* <h1 className="text-3xl font-bold">Blogs:{blogs.length}</h1> */}
            {
                blogs.map((item,index)=>
                <Blog key={index}
                 blog={item}
                 handleAddToBookmarks={handleAddToBookmarks}
                 
                 ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;