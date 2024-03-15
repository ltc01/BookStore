import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BookModel from './BookModel';

const SingleCard = ({ item }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='border-gray-600 border-2'>
            <h1>{item.publishYear}</h1>
            <h4>{item._id}</h4>

            <div>
                <h2>{item.title}</h2>
            </div>
            <div>
                <h2>{item.author}</h2>
            </div>
            <div>
                <AiOutlineEdit onClick={() => setShow(true)} />
                <Link to={`/books/details/${item._id}`}>
                    <BsInfoCircle />
                </Link>

                <Link to={`/books/edit/${item._id}`}>
                    <AiOutlineEdit />
                </Link>

                <Link to={`/books/delete/${item._id}`}>
                    <MdOutlineDelete />
                </Link>
            </div>
            {show && (
                <BookModel item={item} onClose={() => setShow(false)} />
            )}
        </div>
    )
}

export default SingleCard