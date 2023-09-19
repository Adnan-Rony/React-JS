import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts=useLoaderData();
    
    return (
        <div className=''>
            <h2>Posts:</h2>
            {/* <p>title:{title}</p> */}
           <div className=' space-y-3 grid grid-cols-3 gap-4 rounded-2xl'>
           {
                posts.map((postt,index)=>(<Post key={index} post={postt}></Post>))
            }
           </div>
        </div>
    );
};

export default Posts;