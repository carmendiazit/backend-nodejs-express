import fs from 'fs';
import path from 'path';


const __dirname = import.meta.dirname;
const dataPath = path.join(__dirname, '../data/products.json');

const productModel = {
  getAllProducts, getProductById, saveProduct, deleteProduct
}


export function getAllProducts(){ 
try
{
    const data = fs.readFileSync(dataPath,'utf-8');
    return JSON.parse(data);
}    
catch(error){
        console.error(error);
    }
}

export function getAllProductsA() {
    try{
    const data = fs.readFile(dataPath,'utf-8', (err, data) => {
        if (err){
            console.log('Error al leer el archivo', err);
            return;
        }
        console.log(data);
        console.log(JSON.stringify(data));
    });
    return (JSON.stringify(data));
        }catch  (error){
        console.error(error);
    }
}

export function getProductById(id) {
    try{
    const products = this.getAllProducts();
    return products.find(product => product.id == id);
    } catch  (error){
        console.error(error);
    }
}

export function saveProduct(name, price) {
    try{
    const products = this.getAllProducts();
    const obj = {id: products.length, name: name, price: price};   
    products.push(obj);    
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    }catch  (error){
     console.error(error);
    }
}

export function deleteProduct(id){
  try{  
  let products= this.getAllProducts();
  const productIndex = products.findIndex((item) =>item.id == id) ;  
  console.log(productIndex); 
  
  if(productIndex === -1){
    console.log(`Producto con id ${id} no encontrado`);
    return;
   }
   products.splice(productIndex,1);      
   
   fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
   console.log(`Producto con id ${id} eliminado`);

       }catch  (error){
        console.error(error);
    }
};

export default productModel;

