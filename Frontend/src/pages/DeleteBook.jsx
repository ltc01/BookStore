import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';

const DeleteBook = () => {
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = ()=> {
    setLoading(true);
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(
      ()=>{
        setLoading(false);
        navigate('/');
      })
      .catch(
        (error)=>{
          console.log(error);
          setLoading(false);
          alert("An error occured");
        }
      )
  }

  return (
    <div>
      <BackButton />
      <h1>Delete book</h1>
      {loading ? (<Loader />): ''}
      <div>
        
      <h1>Are you Sure you want to delete this book?</h1>
      <button onClick={handleDeleteBook}>Delete</button>
      </div>
      
    </div>
  )
}

export default DeleteBook