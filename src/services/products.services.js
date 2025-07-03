import productModel  from '../models/products.model.js';



const productService = {
  getAllProducts, 
  getProductById,
  saveProduct ,deleteProduct 
}

export function getAllProducts (){
 return productModel.getAllProducts();
};

export function getProductById (id){
 return productModel.getProductById(id);
};
export function saveProduct(name, price){
 return productModel.saveProduct(name, price);
};
export function deleteProduct(id){
 return productModel.deleteProduct(id);
};

export default productService;
