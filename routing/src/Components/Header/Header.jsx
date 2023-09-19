import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <nav className='space-x-3 text-3xl font-bold hover:transition-colors'>
               
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">contact us</a> */}


                <Link to="/">Home</Link>

                <Link to="/users">users</Link>

                <Link to="/Posts">Posts</Link>

                <Link to="/about">About</Link>

                <Link to="/contact">contact</Link>

               
                


            </nav>
        </div>
    );
};

export default Header;