import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import seedRouter from './Routes/seedRoute.js';
import productRouter from './Routes/productRoute.js';


dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err.message);
});

const app = express();

app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
