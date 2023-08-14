// server.js
const express = require('express');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// JSON Server'ı başlatma
const jsonServerRouter = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use('/api', jsonServerRouter);
app.use('/images', express.static('public/images'));



// Ürünleri almak
app.get('/api/products', (req, res) => {
  // Burada ürünleri gerçek bir veritabanından alabilirsiniz
  const products = []; // Gerçek ürün verilerini burada doldurun
  res.json(products);
});

// Sepeti almak
app.get('/api/basket', (req, res) => {
  // Burada sepeti gerçek bir veritabanından alabilirsiniz
  const basket = []; // Gerçek sepet verilerini burada doldurun
  res.json(basket);
});

// Favorileri almak
app.get('/api/favourites', (req, res) => {
  // Burada favorileri gerçek bir veritabanından alabilirsiniz
  const favourites = []; // Gerçek favori verilerini burada doldurun
  res.json(favourites);
});

// Ürün ekleme
app.post('/api/products', (req, res) => {
  // Ürünü req.body'den alın ve veritabanına ekleyin
  const newProduct = req.body;
  // Gerçek bir veritabanına eklemek için gerekli kodu burada kullanın
  res.json(newProduct);
});

// Sepete ekleme
app.post('/api/basket', (req, res) => {
  // Ürünü req.body'den alın ve sepete ekleyin
  const newBasketItem = req.body;
  // Gerçek bir veritabanına eklemek için gerekli kodu burada kullanın
  res.json(newBasketItem);
});

// Favorilere ekleme
app.post('/api/favourites', (req, res) => {
  // Ürünü req.body'den alın ve favorilere ekleyin
  const newFavourite = req.body;
  // Gerçek bir veritabanına eklemek için gerekli kodu burada kullanın
  res.json(newFavourite);
});

// Express sunucusunu başlatma
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
