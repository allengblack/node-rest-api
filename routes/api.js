const express = require('express');
const router = express.Router();

// GET a list of Ninjas from database
router.get('/ninjas', (req, res) => {
    res.send({ type: 'GET' }); 
});

// GET one list of Ninjas from database
router.get('/ninjas/:id', (req, res) => {
    res.send({ type: 'GET' }); 
    // res.send({ type: req.method.toUpperCase }); 
});

// Add a Ninjas to database
router.post('/ninjas', (req, res) => {
    console.log(req.body);
    res.send({ type: 'POST' });
});

// Edit a Ninja's info
router.put('/ninjas/:id', (req, res) => {
    res.send({ type: req.method.toUpperCase }); 
});

// DELETE a Ninja
router.delete('/ninjas/:id', (req, res) => {
    res.send({ type: req.method.toUpperCase }); 
});

module.exports = router;