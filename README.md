# Backend Node.js Express - Products API

A simple RESTful API built with Node.js and Express.js for managing products. This project demonstrates a clean architecture with controllers, services, and models layers.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete products
- **Clean Architecture**: Organized with controllers, services, and models
- **JSON File Storage**: Simple file-based data persistence
- **CORS Support**: Cross-origin resource sharing enabled
- **ES6 Modules**: Modern JavaScript module system
- **Express Router**: Modular route handling

## 📁 Project Structure

```
backend-nodejs-express/
├── src/
│   ├── controllers/
│   │   └── products.controller.js    # Request handlers
│   ├── services/
│   │   └── products.services.js      # Business logic
│   ├── models/
│   │   └── products.model.js         # Data layer
│   ├── routers/
│   │   └── products.router.js        # Route definitions
│   └── data/
│       └── products.json             # Data storage
├── index.js                          # Application entry point
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend-nodejs-express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # Development mode (with nodemon)
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Server will be running at:** `http://localhost:3000`

## 📚 API Endpoints

### Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|---------------|
| GET    | `/products` | Get all products | - |
| GET    | `/products/:id` | Get product by ID | - |
| POST   | `/products` | Create new product | `{"name": "string", "price": "string"}` |
| DELETE | `/products/:id` | Delete product by ID | - |

### Example Requests

#### Get all products
```bash
GET http://localhost:3000/api/products
```

#### Get product by ID
```bash
GET http://localhost:3000/api/products/1
```

#### Create new product
```bash
POST http://localhost:3000/api/products
Content-Type: application/json

{
  "name": "Pizza Margherita",
  "price": "12.50"
}
```

#### Delete product
```bash
DELETE http://localhost:3000/api/products/1
```

## 🔧 Dependencies

- **express**: Web framework for Node.js
- **nodemon**: Development tool for auto-restarting server

## 📝 Scripts

- `npm start`: Start the server in production mode
- `npm run dev`: Start the server in development mode with nodemon
- `npm test`: Run tests (currently not implemented)

## 🏗️ Architecture

This project follows a layered architecture pattern:

1. **Controllers**: Handle HTTP requests and responses
2. **Services**: Contain business logic and data processing
3. **Models**: Handle data persistence and retrieval
4. **Routers**: Define API routes and middleware

## 💾 Data Storage

The application uses a simple JSON file (`src/data/products.json`) for data persistence. Each product has the following structure:

```json
{
  "id": 1,
  "name": "Product Name",
  "price": "10.99"
}
```

## 🚦 Error Handling

- **404 Not Found**: Returned for undefined routes
- **200 OK**: Returned for successful operations
- The API includes basic error handling for common scenarios

## 🔄 Development

### Adding New Features

1. **Add new routes** in `src/routers/products.router.js`
2. **Create controller methods** in `src/controllers/products.controller.js`
3. **Implement business logic** in `src/services/products.services.js`
4. **Add data operations** in `src/models/products.model.js`

### Code Style

- Uses ES6 modules (`import/export`)
- Async/await for asynchronous operations
- Consistent naming conventions
- Separated concerns with layered architecture

## 📋 TODO / Future Improvements

- [ ] Add input validation
- [ ] Implement proper error handling
- [ ] Add unit tests
- [ ] Replace JSON file with database (MongoDB, PostgreSQL, etc.)
- [ ] Add authentication and authorization
- [ ] Implement logging
- [ ] Add API documentation (Swagger/OpenAPI)
- [ ] Add environment configuration
- [ ] Implement pagination for large datasets

## 👨‍💻 Author

**carmendiazit**

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

*Built with ❤️ using Node.js and Express.js*
