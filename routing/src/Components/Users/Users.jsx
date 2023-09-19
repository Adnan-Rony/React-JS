import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {

        const users=useLoaderData();


                console.log(users);
    return (
        <div>
            <h2 className='text-3xl font font-semibold'>our users: {users.length}</h2>
            <h2>gooood users</h2>
            <div className='grid grid-cols-3 gap-3 p-4'>
                {
                    users.map((user,index)=>(<User key={index} user={user}></User>))
                }
            </div>
        </div>
    );
};

export default Users;