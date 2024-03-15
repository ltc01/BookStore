import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Table from '../components/Table';
import Card from '../components/Card';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/books')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Server Down!!")
      })
  }, []);

  return (
    <>
      <div className='m-20 p-10 bg-black'>
        <div>
          <button onClick={() => setType('table')}>Table</button>
          <button onClick={() => setType('card')}>Card</button>
          <Link to='/books/create' >
            <MdOutlineAddBox className='text-2xl' />
          </Link>
        </div>
        {loading ? (<Loader />) : (type === 'table' ? <Table books={books} /> : <Card books={books} />)}
      </div>
    </>
  )
}

export default Home