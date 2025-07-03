import express from 'express';

const router = express.Router();

import { getAllProducts, getProductById, saveProduct, deleteProduct } from  '../controllers/products.controller.js';

// 👇 Esto es obligatorio para poder leer req.body como JSON
router.use(express.json());
//

// Esto es necesario:
//router.use('/', router);


router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', saveProduct);

router.delete('/products/:id', deleteProduct);

export default router;