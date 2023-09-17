import React, { useState } from 'react';
import List from '../List/List';
import { AiOutlineMenuUnfold,AiOutlineClose } from 'react-icons/ai';

const Navber = () => {
    const [open,setopen] = useState(false)
    const routes = [
        { path: '/', id: 'home', name: 'Home' },
        { path: '/about', id: 'about', name: 'About' },
        { path: '/products', id: 'products', name: 'Products' },
        { path: '/contact', id: 'contact', name: 'Contact' },
        { path: '/dashboard', id: 'dashboard', name: 'Dashboard' },
      ];
      
    return (
        <nav className='bg-yellow-200 p-6 text-black'>
          <div className='md:hidden' onClick={()=>setopen(!open)}>
            {
                open==true ?<AiOutlineClose className='text-2xl '></AiOutlineClose> :  <AiOutlineMenuUnfold className='text-2xl '></AiOutlineMenuUnfold>
            }
        
          </div>
            <ul className={`md:flex absolute md:static duration-1000 

                ${open ? 'top-16' : '-top-60'}

            bg-yellow-100 px-5`}>
                {
                    routes.map((route)=> <List key={route.id} route={route}></List>)
                }
            </ul>
            
        </nav>
    );
};

export default Navber;