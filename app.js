const express = require('express');
const fs = require('fs');
const path = require('path');
const homeRouter = require('./router/homeRouter');
const productRouter = require('./router/productRouter');
const app = express();
const port = 5005;

app.use(express.static(path.join(__dirname, '/views')))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.use('/', homeRouter);

app.get('/about', (req, res) => {
    res.render('./pages/about');
});

app.get('/contact', (req, res) => {
    res.render('./pages/contact');
});

app.use('/products', productRouter);


app.listen(port, (req, res) => {
    console.log(`Server Started on port ${port}`);
});