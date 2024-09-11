const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any additional fields if needed (e.g., address, phone number, etc.)
});

const User = mongoose.model('User', userSchema);
module.exports = User;
