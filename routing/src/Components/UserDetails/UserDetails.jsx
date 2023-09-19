import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user=useLoaderData();
    const {name,city,website}=user
    return (
        <div>
            <h2 className='text-3xl font-bold'>details about users:{name}</h2>
            <p className='text-2xl font-bold text-blue-500'>website:{website}</p>
        </div>
    );
};

export default UserDetails;