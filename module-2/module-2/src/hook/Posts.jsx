import { useEffect, useState } from "react"

export default function Posts({name}){

    const [posts,setPosts]=useState([])

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data=> setPosts(data))
    },[])

    

    return (
        <div>
                <h4>Post:{posts.length}</h4>
              {
                posts.map(Post =><post post={Post}></post>)
              }

        </div>
        
    )
}

/* 
1.create a state to store the data.
2.create use effect with no dependencies.
3.use fetch to load data
*/