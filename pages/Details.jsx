import React from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();


    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <h1 className='text-4xl font-bold'>You are in Details Page  {id}</h1>
        </div>
    )
}

export default Details