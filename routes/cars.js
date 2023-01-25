const express = require('express');
const router = express.Router();
const carsCtrl = require("../controllers/carsControllers")

// Create a car (POST)
router.post('/', carsCtrl.createOne);

// Retrieve all cars (GET)
router.get('/', carsCtrl.getAll);

//Retrieve one car (GET by id)
router.get('/:id', carsCtrl.getOne);

//Retrieve one car (GET by name)
router.get('/:name', carsCtrl.getOne);



// Update a car (PATCH)
router.patch('/', carsCtrl.updateOne);


// Remove a car (DELETE)
router.delete('/:id', carsCtrl.deleteOne);

module.exports = router;