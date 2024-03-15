import React from 'react'
import SingleCard from './SingleCard';

const Card = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2'>
            {books.map((item) => (
                <SingleCard key={item._id} item={item} />
            ))}
        </div>
    )
}

export default Card