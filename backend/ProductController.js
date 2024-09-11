const Purchase = require('./productModel'); // Correct the import path

// Handle purchase request
exports.createPurchase = async (req, res) => {
  const { productName, quantity, totalPrice } = req.body;
  
  console.log('Received purchase data:', req.body); // Debugging log

  if (!productName || !quantity || !totalPrice) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newPurchase = new Purchase({ productName, quantity, totalPrice });
    await newPurchase.save();
    console.log('Purchase saved successfully:', newPurchase); // Debugging log
    res.status(201).json({ message: 'Purchase recorded successfully', purchase: newPurchase });
  } catch (error) {
    console.error('Error recording purchase:', error); // Debugging log
    res.status(500).json({ message: 'Error recording purchase', error });
  }
};
