// backend/routes/productRoutes.js
// backend/routes/purchaseRoutes.js
const express = require('express');
const router = express.Router();
const { createPurchase } = require('./ProductController');

router.post('/purchase', createPurchase);

module.exports = router;
