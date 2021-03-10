const express = require('express');
const fs = require('fs');
const json = require('../data/data.json');
const productRouter = express.Router();

console.log(json);


productRouter.get('/:id', (req, res) => {
    let id = req.params.id
    console.log(id);

    let product = json.find(item => item.id === id);
    console.log(product);

    // res.render('./pages/product', {product});
    res.send(json);
});

module.exports = productRouter;


//to do require