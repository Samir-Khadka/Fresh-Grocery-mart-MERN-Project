const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const products = require('./data/products');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const importData = async () => {
  try {
    // 1. Clear existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // 2. Create Admin
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123',
      role: 'admin'
    });

    // 3. Create Drivers (3)
    const drivers = [
      { name: 'John Wheeler', email: 'driver1@example.com', license: 'DL-11111' },
      { name: 'Sarah Fast', email: 'driver2@example.com', license: 'DL-22222' },
      { name: 'Mike Swift', email: 'driver3@example.com', license: 'DL-33333' }
    ];

    for (const d of drivers) {
      await User.create({
        name: d.name,
        email: d.email,
        password: 'password123',
        role: 'driver',
        licenseNumber: d.license,
        isVerified: true
      });
    }

    // 4. Create Buyers (30)
    const firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

    for (let i = 0; i < 30; i++) {
      const fName = firstNames[i % firstNames.length];
      const lName = lastNames[i % lastNames.length];
      await User.create({
        name: `${fName} ${lName}`,
        email: `user${i + 1}@example.com`,
        password: 'password123',
        role: 'user'
      });
    }

    console.log('✅ 1 Admin, 3 Drivers, and 30 Buyers Created');

    // 3. Create Products (linked to admin)
    const sampleProducts = products.map((product) => {
      return { ...product, user: admin._id };
    });

    await Product.insertMany(sampleProducts);

    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('🗑️ Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
