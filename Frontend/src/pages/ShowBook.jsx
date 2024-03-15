import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Loader from '../components/Loader'


const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res)=>{
      setBook(res.data.book);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  },[])
  
  return (
    <div>
      <BackButton />
      <h1>Show Book</h1>
      {loading ? (<Loader />) : (
        <div className='flex flex-col border-2 border-sky-500 w-fit p-2'>
          <div className="my-4">
            <span>ID</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span>Title</span>
            <p>{book.title}</p>
          </div>
          <div className="my-4">
            <span>Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span>Created On</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span>Last Updated on</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook