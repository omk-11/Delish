require('dotenv').config();
const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/delish', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const sampleRestaurant = {
  name: "Cafe Delish",
  slug: "cafe-delish",
  logo: "/images/logo.png",
  description: "Fresh coffee and artisan food",
  categories: [
    {
      name: "Coffee",
      items: [
        {
          name: "Latte",
          description: "Smooth milk coffee",
          price: 4.5
        },
        {
          name: "Cappuccino",
          description: "Espresso with steamed milk",
          price: 4
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Chocolate Cake",
          description: "Rich chocolate cake",
          price: 6
        }
      ]
    }
  ]
};

async function seed() {
  try {
    await Restaurant.deleteMany({});
    await Restaurant.create(sampleRestaurant);
    console.log('Sample data inserted');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

seed();