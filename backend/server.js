const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const purchaseRoutes = require('./productRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json())
// Routes  umair
app.use('/api', purchaseRoutes);
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb+srv://umairhasanumair12:umair@cluster0.lqdmewy.mongodb.net/vitamin12?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
