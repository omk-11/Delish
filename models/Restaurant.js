const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const categorySchema = new mongoose.Schema({
  name: String,
  items: [menuItemSchema]
});

const restaurantSchema = new mongoose.Schema({
  name: String,
  slug: String,
  logo: String,
  description: String,
  categories: [categorySchema]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);