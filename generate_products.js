const fs = require('fs');

const baseItems = [
  'Apple', 'Banana', 'Orange', 'Strawberry', 'Blueberry', 'Raspberry', 'Grape', 'Watermelon', 'Cantaloupe', 'Pineapple',
  'Mango', 'Peach', 'Pear', 'Plum', 'Kiwifruit', 'Lemon', 'Lime', 'Cherry', 'Tomato', 'Potato',
  'Onion', 'Garlic', 'Carrot', 'Broccoli', 'Cauliflower', 'Spinach', 'Lettuce', 'Cabbage', 'Cucumber', 'Zucchini',
  'Bell pepper', 'Jalapeño', 'Mushroom', 'Celery', 'Asparagus', 'Maize', 'Pea', 'Green bean', 'Sweet potato', 'Pumpkin',
  'Avocado', 'Milk', 'Cheese', 'Butter', 'Yogurt', 'Cream', 'Egg (food)', 'Bread', 'Bagel', 'Croissant',
  'Muffin', 'Chicken meat', 'Beef', 'Pork', 'Lamb and mutton', 'Turkey meat', 'Salmon', 'Tuna', 'Shrimp', 'Crab',
  'Lobster', 'Tofu', 'Rice', 'Pasta', 'Oat', 'Quinoa', 'Flour', 'Sugar', 'Salt', 'Black pepper',
  'Olive oil', 'Vinegar', 'Ketchup', 'Mustard (condiment)', 'Mayonnaise', 'Soy sauce', 'Peanut butter', 'Jam', 'Honey', 'Maple syrup',
  'Coffee', 'Tea', 'Juice', 'Soft drink', 'Drinking water', 'Beer', 'Wine', 'Potato chip', 'Pretzel', 'Popcorn',
  'Cookie', 'Chocolate', 'Ice cream', 'Breakfast cereal', 'Soup', 'Baked beans', 'Nut (fruit)', 'Seed', 'Granola', 'Bacon'
];

const variants = ["Organic", "Fresh", "Premium", "Value", "Local", "Imported", "Farm-style", "Classic", "Deluxe", "Signature"];

async function generateProducts() {
  const products = [];
  let baseImages = {};

  console.log(`Fetching images for ${baseItems.length} base items...`);
  
  for (const item of baseItems) {
    try {
      const searchTitle = item.replace(/ /g, '%20');
      const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${searchTitle}&prop=pageimages&format=json&pithumbsize=500`, {
        headers: { 'User-Agent': 'MERN-Bot/1.0 (test@example.com)' }
      });
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      
      let imageUrl = 'https://via.placeholder.com/500?text=' + encodeURIComponent(item);
      if (pages[pageId] && pages[pageId].thumbnail) {
        imageUrl = pages[pageId].thumbnail.source;
      } else {
        console.log(`No wiki image for: ${item}`);
      }
      baseImages[item] = imageUrl;
    } catch (e) {
      console.log(`Error fetching ${item}`, e.message);
      baseImages[item] = 'https://via.placeholder.com/500?text=' + encodeURIComponent(item);
    }
    // Rate limit prevention
    await new Promise(r => setTimeout(r, 100));
  }

  // Generate 1000 items
  for (let i = 0; i < baseItems.length; i++) {
    for (let j = 0; j < variants.length; j++) {
      const baseItem = baseItems[i];
      const variant = variants[j];
      const name = `${variant} ${baseItem.replace(/ \(.+\)/, '')}`; // remove parenthetical like "(food)"
      
      products.push({
        name: name,
        category: getCategory(baseItem),
        price: Number((Math.random() * 10 + 1).toFixed(2)),
        stock: Math.floor(Math.random() * 200) + 10,
        image: baseImages[baseItem],
        description: `High quality ${variant.toLowerCase()} ${baseItem.replace(/ \(.+\)/, '').toLowerCase()} for your everyday needs.`
      });
    }
  }

  const fileContent = `const products = ${JSON.stringify(products, null, 2)};\n\nmodule.exports = products;\n`;
  fs.writeFileSync('./backend/data/products.js', fileContent);
  console.log(`Successfully wrote ${products.length} products to products.js`);
}

function getCategory(item) {
  const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Blueberry', 'Raspberry', 'Grape', 'Watermelon', 'Cantaloupe', 'Pineapple', 'Mango', 'Peach', 'Pear', 'Plum', 'Kiwifruit', 'Lemon', 'Lime', 'Cherry', 'Avocado'];
  const vegetables = ['Tomato', 'Potato', 'Onion', 'Garlic', 'Carrot', 'Broccoli', 'Cauliflower', 'Spinach', 'Lettuce', 'Cabbage', 'Cucumber', 'Zucchini', 'Bell pepper', 'Jalapeño', 'Mushroom', 'Celery', 'Asparagus', 'Maize', 'Pea', 'Green bean', 'Sweet potato', 'Pumpkin'];
  const dairy = ['Milk', 'Cheese', 'Butter', 'Yogurt', 'Cream'];
  const meat = ['Chicken meat', 'Beef', 'Pork', 'Lamb and mutton', 'Turkey meat', 'Salmon', 'Tuna', 'Shrimp', 'Crab', 'Lobster', 'Bacon'];
  const bakery = ['Bread', 'Bagel', 'Croissant', 'Muffin'];
  
  if (fruits.includes(item)) return 'Fruits';
  if (vegetables.includes(item)) return 'Vegetables';
  if (dairy.includes(item)) return 'Dairy';
  if (meat.includes(item)) return 'Meat';
  if (bakery.includes(item)) return 'Bakery';
  return 'Pantry & Others';
}

generateProducts();
