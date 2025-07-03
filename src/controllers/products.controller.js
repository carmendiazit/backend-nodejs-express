import productService  from '../services/products.services.js';


export const getAllProducts = async (req, res) => {
    res.status(200).json(productService.getAllProducts());    
};


export const getProductById = async (req, res) => {
    const id = req.params.id;
    res.status(200).json(productService.getProductById(id));    
};

export const saveProduct = async (req, res) => {
   const { name, price } = req.body;
    console.log(req.body);
    const savedProduct = productService.saveProduct(name, price);    
    res.status(200).json(savedProduct);   
};

export const deleteProduct = async (req, res) => {     
    const id = req.params.id;
    res.status(200).json(productService.deleteProduct(id));    
};
