import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs,setblogs]=useState([])
            useEffect(()=>{
                fetch('Blog.json')
                .then(res=> res.json())
                .then(data=>setblogs(data))
            },[])
            
    return (
        <div className="w-2/3">

            <h1>Blogs:</h1>
            {
                blogs.map((item,index)=>
                <Blog key={index}
                 blog={item}
                 
                 ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;