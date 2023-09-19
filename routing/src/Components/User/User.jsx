import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,phone,email}=user;
    return (
        <div className='space-y-3 p-5 border-2 gap-3 rounded-xl'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <Link className=' text-xl' to={`/user/${id}`}><button className='p-4 border rounded-2xl bg-blue-600 text-white mt-3'>show details</button></Link>
            
        </div>
    );
};

export default User;