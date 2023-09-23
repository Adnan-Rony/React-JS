import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PhoneDetails = () => {

    const [phone,setphone]=useState();

        // const params=useParams();
        // console.log(params);


        const {id}=useParams();
        // console.log(id);
       


        const phones=useLoaderData();
        // console.log(phones);




        useEffect(()=>{

            const findPhone=phones.find(phone=>phone.id == id)
            // console.log(findPhone);
            setphone(findPhone)

        },[id,phones])

        console.log(phone);

    return (
        <div>
            <h1>phone details</h1>
        </div>
    );
};

export default PhoneDetails;