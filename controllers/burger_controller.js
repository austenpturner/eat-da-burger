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
        res.json(data);
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.updateOne('devoured', 
    req.body.devoured, req.params.id, 
    data => {
        if (data.changedRows > 0) {
            console.log('update successful');
        } else {
            console.log('no update made');
        }
        res.json(data.changedRows);
    });
});

router.delete('/api/burgers/:id', (req, res) => {
    burger.destroy('id',
    req.params.id,
    data => {
        if (data.affectedRows > 0) {
            console.log('burger deleted');
        } else {
            console.log('no burger was deleted');
        }
        res.json(data.affectedRows);
    });
});

module.exports = router;

