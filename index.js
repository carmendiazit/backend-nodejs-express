
//este script viene de un proyecto clase11

import express from 'express';
import cors from 'cors';

import productsRouter from './src/routers/products.router.js';

const app = express();

app.use(cors());

app.use('/api',productsRouter);


app.use((req, res, next )=> { 
  res.status(404).json({error: "Not found"});   

});
const PORT = 3000;  

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));

