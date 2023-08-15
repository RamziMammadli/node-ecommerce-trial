// server.js
const express = require('express');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const jsonServerRouter = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use('/api', jsonServerRouter);
app.use('/images', express.static('public/images'));



// mehsullar
app.get('/api/products', (req, res) => {
  const products = []; 
  res.json(products);
});

// Sebet
app.get('/api/basket', (req, res) => {
  const basket = []; 
  res.json(basket);
});

// wishlist
app.get('/api/favourites', (req, res) => {
  const favourites = []; 
  res.json(favourites);
});

// mehsul elave et
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  res.json(newProduct);
});

// sebete elave et
app.post('/api/basket', (req, res) => {
  const newBasketItem = req.body;
  res.json(newBasketItem);
});

// add wishlist
app.post('/api/favourites', (req, res) => {
  const newFavourite = req.body;
  res.json(newFavourite);
});

// Sebet delete
app.delete('/api/basket/:productId', (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  res.json({ message: `Product with ID ${productId} has been removed from the basket.` });
});

// Wishlist delete
app.delete('/api/favourites/:productId', (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  res.json({ message: `Product with ID ${productId} has been removed from the favourites.` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
