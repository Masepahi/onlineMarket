const express = require('express');
const fs = require('fs');
const homeRouter = express.Router();




homeRouter.get('/', (req, res) => {
    fs.readFile('../data/data.json', 'utf8', (err, data) => {
        if (err) return res.status(400).send(err);
        res.render('./pages/home', {products:JSON.parse(data)});
    })
    
});

module.exports = homeRouter;