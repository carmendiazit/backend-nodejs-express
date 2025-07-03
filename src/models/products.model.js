import fs from 'fs';
import path from 'path';


const __dirname = import.meta.dirname;
const dataPath = path.join(__dirname, '../data/products.json');

const productModel = {
  getAllProducts, getProductById, saveProduct, deleteProduct
}


export function getAllProducts() {
    const data = fs.readFileSync(dataPath,'utf-8');
    return JSON.parse(data);
}

export function getAllProductsA() {
    const data = fs.readFile(dataPath,'utf-8', (err, data) => {
        if (err){
            console.log('Error al leer el archivo', err);
            return;
        }
        console.log(data);
        console.log(JSON.stringify(data));
    });
    return (JSON.stringify(data));
}

export function getProductById(id) {
    const products = this.getAllProducts();
    return products.find(product => product.id == id);
}
//Metodo para guardar un producto en el Json
export function saveProduct(name, price) {
    const products = this.getAllProducts();
    const obj = {id: products.length, name: name, price: price};   
    products.push(obj);    
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

export function deleteProduct(id){
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
};




export default productModel;

