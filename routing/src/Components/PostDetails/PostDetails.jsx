import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    const{id,title,body}=post
    return (
        <div className='border'>
            <h1 className='text-3xl font-bold'>Post details:</h1>
            <p className='text-2xl font-medium'>Title :{title}</p>
            <p className='text-2xl font-medium'>Body :{body}</p>
        </div>
    );
};

export default PostDetails;