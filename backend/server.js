import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err.message);
});

const app = express();
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug)
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: 'product not found'})
  }

});
app.get('/api/products/:_id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params._id)
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: 'product not found'})
  }

});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
