import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function BookModel({ item, onClose }) {
    return (
        <div
            
            className='bg-opacity-60 fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>
            <div onClick={(event) => event.stopPropagation()}
                className="w-[500px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative">

                <AiOutlineClose className='absolute top-3 right-3'onClick={onClose} />
                <h1>{item.publishYear}</h1>
                <h4>{item._id}</h4>

                <div>
                    <h2>{item.title}</h2>
                </div>
                <div>
                    <h2>{item.author}</h2>
                </div>
                
                </div>

            </div>
            )
}

            export default BookModel