import productService  from '../services/products.services.js';


export const getAllProducts = async (req, res) => {
    res.status(200).json(productService.getAllProducts());    
};
