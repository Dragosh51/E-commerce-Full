const express = require('express');
const router = express.Router();
const db = require('../models');
const { product } = require('../models/index');

// Retrieve Products by Category (GET)
router.get('/products', (req, res) => {
    db.product.findAll().then((products) => {
      res.status(200).json(products);
    });
  });

module.exports = router;