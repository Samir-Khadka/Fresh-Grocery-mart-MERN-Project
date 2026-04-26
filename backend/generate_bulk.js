const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');

dotenv.config();

const categories = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery', 'Pantry', 'Beverages'];
const adjectives = ['Organic', 'Fresh', 'Premium', 'Local', 'Large', 'Mini', 'Whole', 'Sliced', 'Natural', 'Healthy'];
const bases = {
    Fruits: ['Apple', 'Banana', 'Orange', 'Strawberry', 'Grape', 'Mango', 'Pineapple', 'Watermelon', 'Kiwi', 'Pear', 'Peach', 'Plum'],
    Vegetables: ['Tomato', 'Potato', 'Carrot', 'Onion', 'Broccoli', 'Spinach', 'Cucumber', 'Pepper', 'Garlic', 'Ginger', 'Lettuce'],
    Dairy: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream', 'Eggs', 'Cottage Cheese', 'Sour Cream'],
    Meat: ['Chicken Breast', 'Beef Steak', 'Lamb Chops', 'Pork Mince', 'Salmon Fillet', 'Turkey Breast', 'Bacon'],
    Bakery: ['White Bread', 'Wholemeal Bread', 'Croissant', 'Bagel', 'Muffin', 'Cookie', 'Cake', 'Sourdough'],
    Pantry: ['Rice', 'Pasta', 'Flour', 'Sugar', 'Honey', 'Olive Oil', 'Salt', 'Black Pepper', 'Lentils', 'Beans'],
    Beverages: ['Apple Juice', 'Orange Juice', 'Coffee Beans', 'Tea Bags', 'Sparkling Water', 'Energy Drink', 'Cola']
};

const images = [
    'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500',
    'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=500',
    'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500',
    'https://images.unsplash.com/photo-1543168256-418811576931?w=500',
    'https://images.unsplash.com/photo-1542133387742-c7c88003613a?w=500'
];

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected for bulk generation...');
        await generateData();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const generateData = async () => {
    try {
        // Find an admin user to associate products with
        const admin = await User.findOne({ role: 'admin' });
        if (!admin) {
            console.error('No admin user found! Please register an admin first.');
            process.exit(1);
        }

        const count = await Product.countDocuments();
        const target = 1000;
        const remaining = target - count;

        if (remaining <= 0) {
            console.log('You already have over 1000 products!');
            process.exit();
        }

        console.log(`Generating ${remaining} new products under admin: ${admin.email}...`);

        const newProducts = [];
        for (let i = 0; i < remaining; i++) {
            const category = categories[Math.floor(Math.random() * categories.length)];
            const baseList = bases[category];
            const base = baseList[Math.floor(Math.random() * baseList.length)];
            const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
            
            const name = `${adj} ${base} #${i + 106}`;
            const price = Math.random() * (15 - 1) + 1;
            const stock = Math.floor(Math.random() * 100) + 10;
            const rating = (Math.random() * (5 - 3) + 3).toFixed(1);
            const numReviews = Math.floor(Math.random() * 200);

            newProducts.push({
                user: admin._id,
                name,
                image: images[Math.floor(Math.random() * images.length)],
                description: `High quality ${adj.toLowerCase()} ${base.toLowerCase()} sourced from the best farms. Perfect for your daily needs.`,
                brand: 'FreshSuper',
                category,
                price: parseFloat(price.toFixed(2)),
                stock,
                rating: parseFloat(rating),
                numReviews
            });
        }

        await Product.insertMany(newProducts);
        console.log('Successfully generated 1000+ products!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

connectDB();
