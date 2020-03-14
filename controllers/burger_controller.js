// Require Express and burger object model
const express = require('express');
const burger = require('../models/burger.js');

// Set up express router
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll( data => {
        res.render('index', { burgers: data });
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne('burger_name', 'devoured', 
    req.body.burger_name, req.body.devoured, 
    data => {
        console.log(data);
        // data.insertId??
        // sres.json({ id: data.insertId });
        res.json(data);
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.updateOne('devoured', 
    req.body.devoured, req.params.id, 
    data => {
        console.log(data.changedRows);
        if (data.changedRows > 0) {
            console.log('update successful');
        } else {
            console.log('no update made');
        }
        res.json(data.changedRows);
    });
});

module.exports = router;

