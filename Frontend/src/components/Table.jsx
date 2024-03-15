import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Table = ({ books }) => {
  return (
    <table className='w-full'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publish Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index)=>(
                     <tr key={book._id}>
                        <td>{index+1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publishYear}</td>
                        <td className='flex'>
                            <div className='flex bg-black w-full'>
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle  />
                                </Link>
                                
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit />
                                </Link>
                                
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete />
                                </Link>
                            </div>
                        </td>
                     </tr>   
                    ))}
                </tbody>
            </table>
  )
}

export default Table