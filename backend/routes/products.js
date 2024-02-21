const express = require('express');
const router = express.Router()

// Retrieve Products by Category (GET)
router.get('/products', async (req, res) => {
    try {
        // Extract category ID from query parameters
        const categoryId = req.query.category;

        // Query the database to get products by category
        const { rows } = await pool.query('SELECT * FROM "Product" WHERE category_id = $1', [categoryId]);

        // Send the response
        res.json(rows);
    } catch (error) {
        console.error('Error retrieving products by category', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;