import express from 'express';
import cors from 'cors';

const app = express();
const products = [
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    rating: { rate: 4.7, count: 130 }
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    rating: { rate: 4.5, count: 146 }
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 12.99,
      category: "women's clothing",
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: { rate: 3.6, count: 145 }
  }
];



app.get('/', (req, res)=> {
  
    res.json({message: "API rest en nodejs"});
});

app.use(cors());
app.use(express.json());

app.get('/products', (req, res)=> {
  
    res.json(products);
});

app.get('/products/search', (req, res)=> {
 const { nombre } = req.query;

 const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(nombre.toLocaleLowerCase()  )) ;

  res.json(filteredProducts);
});

app.get('/products/:id', (req, res)=> {
  const product = products.find((item) =>item.id == req.params.id) ;

  if(!product){ res.status(404).json({error: "no existe el producto"})
  }
  
  res.json(product);
});

app.post('/products', (req, res)=> {
  console.log(req.body);
  const obj = req.body;
  products.push(obj);

  res.status(200).json(obj);
}); 

app.put('/products/:id', (req, res)=> {
  console.log(req.body);
  const productId = parseInt(req.params.id,10);
  const productIndex = products.findIndex((item) =>item.id === productId) ;

  if(productIndex === -1)
    res.status(404).json({error: "Producto no encontrado"});
  
  const{title, price } = req.body;
  products[productIndex] = {id:productId, title, price };
  res.json(products[productIndex]);

 // 
});

app.delete('/products/:id', (req, res)=> {
  console.log(req.body);
  const productId = parseInt(req.params.id,10);
  const productIndex = products.findIndex((item) =>item.id === productId) ;

  if(productIndex === -1)
    res.status(404).json({error: "Producto no encontrado"});
    
  products.splice(productIndex,1);
  res.status(204).json(products[productIndex]);
  
});

app.use((req, res, next )=> {
 
  res.status(404).json({error: "Ruta invalida "});
   

});
const PORT = 3000;  

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));

