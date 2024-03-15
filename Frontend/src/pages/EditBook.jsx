import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5000/books/${id}`)
        .then(
        (res)=>{
            setAuthor(res.data.book.author)
            setTitle(res.data.book.title)
            setPublishYear(res.data.book.publishYear)
            setLoading(false);
          })
          .catch(
            (error)=>{
              console.log(error);
              setLoading(false);
            }
          )
        }, [])
  const handleEditBook = ()=> {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.put(`http://localhost:5000/books/${id}`, data)
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
      <h1>Edit book</h1>
      {loading ? (<Loader />): ''}
      <div>
      <div>
        <label >Title: </label>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  />
      </div>
      <div>
        <label >Author: </label>
        <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}  />
      </div>
      <div>
        <label >Publish Year: </label>
        <input type="text" value={publishYear} onChange={(e)=> setPublishYear(e.target.value)}  />
      </div>
      <button onClick={handleEditBook} className=''>Update</button>
      </div>
      
    </div>
  )
}

export default EditBook