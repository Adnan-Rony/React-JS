import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body}=post
    return (
        <div className='border p-3 '>
            <p className='text3xl font-semibold'>ID: {id}</p>
            <h1>title{title}</h1>
            
            <Link  to={`/post/${id}`}><button className='p-3 bg-blue-700 rounded-2xl text-white'>post details</button></Link>
        </div>
    );
};

export default Post;