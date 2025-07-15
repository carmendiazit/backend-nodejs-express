import express from 'express';

const router = express.Router();

import { getAllProducts, getProductById, saveProduct, deleteProduct } from  '../controllers/products.controller.js';


router.use(express.json());

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', saveProduct);

router.delete('/products/:id', deleteProduct);

export default router;