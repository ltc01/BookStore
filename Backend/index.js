import express from 'express'; 
import { Port, mongoUrl } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    return res.status(200).send("connection successfull")
});

app.use('/books', bookRoutes);

mongoose
.connect(mongoUrl)
.then(()=>{
    console.log("Connected to database");
    app.listen(Port, ()=>( 
        console.log("App started on port:", Port)
    ));

})
.catch((error)=>{
    console.log(error);
})
