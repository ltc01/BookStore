import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const handleSaveBook = ()=> {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.post(`http://localhost:5000/books`, data)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
      alert("Invalid Values to create book.");
    })
}

  return (
    <div>
      <BackButton />
      <h1>Create a book</h1>
      {loading ? (<Loader />): ''}
      <div>
      <div>
        <label >Title</label>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  />
      </div>
      <div>
        <label >Author</label>
        <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}  />
      </div>
      <div>
        <label >Publish Year</label>
        <input type="text" value={publishYear} onChange={(e)=> setPublishYear(e.target.value)}  />
      </div>
      <button onClick={handleSaveBook}>Save</button>
      </div>
      
    </div>
  )
}

export default CreateBook