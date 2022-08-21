const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  token: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema);
