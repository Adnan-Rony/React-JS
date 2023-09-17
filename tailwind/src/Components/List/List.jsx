/* eslint-disable react/prop-types */
import { list } from 'postcss';
import React from 'react';


const List = ({route}) => {
    return (
        <li className='mr-4 text-2xl' key={route.id}>
                        <a href={route.path}>
                            {route.name}
                        </a>
         </li>

    );
};



export default List;