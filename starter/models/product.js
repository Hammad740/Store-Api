const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  rating: {
    type: Number,
  },
  name: {
    type: String,
    required: [true, 'Product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'Product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,

    values: ['ikea', 'liddy', 'caressa', 'marcos'],
    message: `{VALUE} is not supported`,
    //enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
});

module.exports = mongoose.model('Product', productSchema);
