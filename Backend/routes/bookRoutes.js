import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route to save new book 
router.post('/', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({ message: 'Send all required fields: title, author, publishYear'});
        }
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        })
        return res.status(200).send("Book Added successfully")
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
});

//Route to get all books 
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send({
            count: books.length,
            data:books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
});

//Route to get a book by Id
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){ return res.status(404).send("Book not found") }
        return res.status(200).send({book});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
});

//route to update a book by id
router.put('/:id', async (req, res) => {
    try {
        if ( !req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({ message: 'Send all required fields: title, author, publishYear'});
        }
        const { id } = req.params;
        const editBook = await Book.findByIdAndUpdate(id, req.body);
        if(!editBook){
            return res.status(404).send("Book not found.");
        }
        return res.status(200).send('Book Updated successfully.')
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })      
    }
});

//route to delete book by Id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const editBook = await Book.findByIdAndDelete(id)
        if(!editBook){
            return res.status(404).send("Book not found.");
        }
        return res.status(200).send('Book Deleted successfully.')
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })      
    }
});

export default router;