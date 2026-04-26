const fs = require('fs');

// Curated genuine grocery items with exact Wikipedia article titles for accurate images
const groceryItems = [
  // Fruits
  { name: 'Fuji Apple',        wiki: 'Fuji_(apple)',           category: 'Fruits',         price: 1.99, stock: 120, desc: 'Crisp and sweet Fuji apple.' },
  { name: 'Cavendish Banana',  wiki: 'Cavendish_banana',       category: 'Fruits',         price: 0.89, stock: 200, desc: 'Classic yellow Cavendish banana.' },
  { name: 'Navel Orange',      wiki: 'Navel_orange',           category: 'Fruits',         price: 1.49, stock: 150, desc: 'Seedless and juicy navel orange.' },
  { name: 'Strawberry',        wiki: 'Strawberry',             category: 'Fruits',         price: 3.49, stock: 80,  desc: 'Fresh garden strawberries.' },
  { name: 'Blueberry',         wiki: 'Blueberry',              category: 'Fruits',         price: 4.99, stock: 60,  desc: 'Plump wild blueberries.' },
  { name: 'Red Grape',         wiki: 'Grape',                  category: 'Fruits',         price: 2.99, stock: 90,  desc: 'Seedless red table grapes.' },
  { name: 'Watermelon',        wiki: 'Watermelon',             category: 'Fruits',         price: 5.99, stock: 40,  desc: 'Whole seedless watermelon.' },
  { name: 'Honeydew Melon',    wiki: 'Honeydew_(melon)',       category: 'Fruits',         price: 4.49, stock: 35,  desc: 'Sweet honeydew melon.' },
  { name: 'Pineapple',         wiki: 'Pineapple',              category: 'Fruits',         price: 2.99, stock: 55,  desc: 'Whole tropical pineapple.' },
  { name: 'Alphonso Mango',    wiki: 'Alphonso_mango',         category: 'Fruits',         price: 3.99, stock: 70,  desc: 'Premium Alphonso mango.' },
  { name: 'White Peach',       wiki: 'Peach',                  category: 'Fruits',         price: 1.79, stock: 65,  desc: 'Juicy white peach.' },
  { name: 'Bosc Pear',         wiki: 'Bosc_pear',              category: 'Fruits',         price: 1.49, stock: 80,  desc: 'Sweet Bosc pear.' },
  { name: 'Black Plum',        wiki: 'Plum',                   category: 'Fruits',         price: 1.29, stock: 90,  desc: 'Ripe black plum.' },
  { name: 'Kiwifruit',         wiki: 'Kiwifruit',              category: 'Fruits',         price: 0.99, stock: 110, desc: 'Tangy green kiwifruit.' },
  { name: 'Lemon',             wiki: 'Lemon',                  category: 'Fruits',         price: 0.79, stock: 180, desc: 'Bright yellow lemon.' },
  { name: 'Persian Lime',      wiki: 'Persian_lime',           category: 'Fruits',         price: 0.69, stock: 160, desc: 'Seedless Persian lime.' },
  { name: 'Bing Cherry',       wiki: 'Cherry',                 category: 'Fruits',         price: 5.99, stock: 50,  desc: 'Dark sweet Bing cherries.' },
  { name: 'Raspberry',         wiki: 'Raspberry',              category: 'Fruits',         price: 3.99, stock: 55,  desc: 'Fresh red raspberries.' },
  { name: 'Papaya',            wiki: 'Papaya',                 category: 'Fruits',         price: 2.99, stock: 45,  desc: 'Ripe tropical papaya.' },
  { name: 'Avocado',           wiki: 'Avocado',                category: 'Fruits',         price: 1.99, stock: 100, desc: 'Hass avocado, ready to eat.' },

  // Vegetables
  { name: 'Carrot',            wiki: 'Carrot',                 category: 'Vegetables',     price: 1.29, stock: 150, desc: 'Fresh orange carrots.' },
  { name: 'Broccoli',          wiki: 'Broccoli',               category: 'Vegetables',     price: 1.99, stock: 90,  desc: 'Fresh green broccoli crown.' },
  { name: 'Roma Tomato',       wiki: 'Roma_tomato',            category: 'Vegetables',     price: 2.49, stock: 100, desc: 'Firm and flavourful Roma tomato.' },
  { name: 'Yellow Onion',      wiki: 'Onion',                  category: 'Vegetables',     price: 0.99, stock: 200, desc: 'All-purpose yellow onion.' },
  { name: 'Garlic',            wiki: 'Garlic',                 category: 'Vegetables',     price: 0.79, stock: 200, desc: 'Fresh garlic bulb.' },
  { name: 'Russet Potato',     wiki: 'Russet_Burbank_potato',  category: 'Vegetables',     price: 1.49, stock: 180, desc: 'Classic russet baking potato.' },
  { name: 'Sweet Potato',      wiki: 'Sweet_potato',           category: 'Vegetables',     price: 1.29, stock: 140, desc: 'Orange-fleshed sweet potato.' },
  { name: 'Baby Spinach',      wiki: 'Spinach',                category: 'Vegetables',     price: 2.99, stock: 80,  desc: 'Tender baby spinach leaves.' },
  { name: 'Romaine Lettuce',   wiki: 'Romaine_lettuce',        category: 'Vegetables',     price: 1.99, stock: 70,  desc: 'Crisp Romaine lettuce head.' },
  { name: 'Red Cabbage',       wiki: 'Cabbage',                category: 'Vegetables',     price: 1.49, stock: 60,  desc: 'Dense red cabbage head.' },
  { name: 'English Cucumber',  wiki: 'Cucumber',               category: 'Vegetables',     price: 1.29, stock: 90,  desc: 'Long seedless English cucumber.' },
  { name: 'Zucchini',          wiki: 'Zucchini',               category: 'Vegetables',     price: 1.49, stock: 85,  desc: 'Fresh green zucchini.' },
  { name: 'Red Bell Pepper',   wiki: 'Bell_pepper',            category: 'Vegetables',     price: 1.99, stock: 75,  desc: 'Sweet red bell pepper.' },
  { name: 'Jalapeño',          wiki: 'Jalapeño',               category: 'Vegetables',     price: 0.99, stock: 120, desc: 'Spicy fresh jalapeño pepper.' },
  { name: 'Portobello Mushroom', wiki: 'Portobello_mushroom',  category: 'Vegetables',     price: 3.49, stock: 50,  desc: 'Large Portobello mushroom cap.' },
  { name: 'Celery',            wiki: 'Celery',                 category: 'Vegetables',     price: 1.99, stock: 70,  desc: 'Crisp celery bunch.' },
  { name: 'Asparagus',         wiki: 'Asparagus',              category: 'Vegetables',     price: 3.99, stock: 55,  desc: 'Tender green asparagus spears.' },
  { name: 'Sweet Corn',        wiki: 'Corn_on_the_cob',        category: 'Vegetables',     price: 0.89, stock: 130, desc: 'Fresh sweet corn on the cob.' },
  { name: 'Green Peas',        wiki: 'Pea',                    category: 'Vegetables',     price: 1.99, stock: 90,  desc: 'Fresh shelled green peas.' },
  { name: 'Green Beans',       wiki: 'Green_bean',             category: 'Vegetables',     price: 2.49, stock: 80,  desc: 'Tender-crisp green beans.' },
  { name: 'Cauliflower',       wiki: 'Cauliflower',            category: 'Vegetables',     price: 2.99, stock: 60,  desc: 'White cauliflower head.' },
  { name: 'Butternut Squash',  wiki: 'Butternut_squash',       category: 'Vegetables',     price: 2.49, stock: 65,  desc: 'Sweet butternut squash.' },

  // Dairy & Eggs
  { name: 'Whole Milk',        wiki: 'Milk',                   category: 'Dairy & Eggs',   price: 2.49, stock: 80,  desc: 'Fresh whole milk, 1 gallon.' },
  { name: 'Free Range Eggs',   wiki: 'Egg_(food)',             category: 'Dairy & Eggs',   price: 3.99, stock: 100, desc: 'Free range eggs, dozen.' },
  { name: 'Cheddar Cheese',    wiki: 'Cheddar_cheese',         category: 'Dairy & Eggs',   price: 4.99, stock: 60,  desc: 'Mature cheddar cheese block.' },
  { name: 'Mozzarella',        wiki: 'Mozzarella',             category: 'Dairy & Eggs',   price: 3.49, stock: 55,  desc: 'Fresh mozzarella ball.' },
  { name: 'Parmesan',          wiki: 'Parmigiano-Reggiano',    category: 'Dairy & Eggs',   price: 6.99, stock: 40,  desc: 'Aged Parmigiano-Reggiano wedge.' },
  { name: 'Unsalted Butter',   wiki: 'Butter',                 category: 'Dairy & Eggs',   price: 3.99, stock: 70,  desc: 'Creamy unsalted butter, 250g.' },
  { name: 'Greek Yogurt',      wiki: 'Greek_yogurt',           category: 'Dairy & Eggs',   price: 2.99, stock: 80,  desc: 'Thick plain Greek yogurt.' },
  { name: 'Heavy Cream',       wiki: 'Cream',                  category: 'Dairy & Eggs',   price: 2.49, stock: 50,  desc: 'Fresh heavy whipping cream.' },
  { name: 'Cottage Cheese',    wiki: 'Cottage_cheese',         category: 'Dairy & Eggs',   price: 2.79, stock: 45,  desc: 'Low-fat cottage cheese.' },
  { name: 'Feta Cheese',       wiki: 'Feta',                   category: 'Dairy & Eggs',   price: 4.49, stock: 40,  desc: 'Crumbled feta cheese in brine.' },

  // Meat & Seafood
  { name: 'Chicken Breast',    wiki: 'Chicken_as_food',        category: 'Meat & Seafood', price: 7.99, stock: 60,  desc: 'Boneless skinless chicken breast.' },
  { name: 'Beef Ribeye Steak', wiki: 'Rib_eye_steak',          category: 'Meat & Seafood', price: 14.99, stock: 30, desc: 'Premium beef ribeye steak.' },
  { name: 'Pork Belly',        wiki: 'Pork_belly',             category: 'Meat & Seafood', price: 8.99, stock: 35,  desc: 'Thick-cut pork belly slices.' },
  { name: 'Lamb Chops',        wiki: 'Lamb_chop',              category: 'Meat & Seafood', price: 12.99, stock: 25, desc: 'Tender lamb loin chops.' },
  { name: 'Turkey Breast',     wiki: 'Turkey_(food)',          category: 'Meat & Seafood', price: 9.99, stock: 30,  desc: 'Skinless turkey breast.' },
  { name: 'Atlantic Salmon',   wiki: 'Atlantic_salmon',        category: 'Meat & Seafood', price: 11.99, stock: 40, desc: 'Fresh Atlantic salmon fillet.' },
  { name: 'Yellowfin Tuna',    wiki: 'Yellowfin_tuna',         category: 'Meat & Seafood', price: 9.99, stock: 35,  desc: 'Sushi-grade yellowfin tuna.' },
  { name: 'Tiger Prawns',      wiki: 'Penaeus_monodon',        category: 'Meat & Seafood', price: 13.99, stock: 30, desc: 'Fresh tiger prawns.' },
  { name: 'Dungeness Crab',    wiki: 'Dungeness_crab',         category: 'Meat & Seafood', price: 18.99, stock: 15, desc: 'Whole cooked Dungeness crab.' },
  { name: 'Streaky Bacon',     wiki: 'Bacon',                  category: 'Meat & Seafood', price: 5.99, stock: 60,  desc: 'Smoked streaky bacon rashers.' },
  { name: 'Beef Mince',        wiki: 'Ground_beef',            category: 'Meat & Seafood', price: 6.99, stock: 50,  desc: 'Lean ground beef, 500g.' },

  // Bakery
  { name: 'Sourdough Loaf',    wiki: 'Sourdough_bread',        category: 'Bakery',         price: 4.99, stock: 30,  desc: 'Artisan sourdough loaf.' },
  { name: 'Baguette',          wiki: 'Baguette',               category: 'Bakery',         price: 2.49, stock: 40,  desc: 'Classic French baguette.' },
  { name: 'Croissant',         wiki: 'Croissant',              category: 'Bakery',         price: 1.99, stock: 50,  desc: 'Buttery flaky croissant.' },
  { name: 'Blueberry Muffin',  wiki: 'Muffin',                 category: 'Bakery',         price: 2.29, stock: 35,  desc: 'Moist blueberry muffin.' },
  { name: 'Bagel',             wiki: 'Bagel',                  category: 'Bakery',         price: 1.49, stock: 45,  desc: 'Plain New York-style bagel.' },
  { name: 'Cinnamon Roll',     wiki: 'Cinnamon_roll',          category: 'Bakery',         price: 2.99, stock: 30,  desc: 'Glazed cinnamon roll.' },
  { name: 'Whole Wheat Bread', wiki: 'Whole_wheat_bread',      category: 'Bakery',         price: 3.49, stock: 40,  desc: 'Sliced whole wheat bread loaf.' },
  { name: 'Pita Bread',        wiki: 'Pita',                   category: 'Bakery',         price: 2.49, stock: 35,  desc: 'Soft pita bread pack.' },

  // Pantry
  { name: 'Basmati Rice',      wiki: 'Basmati',                category: 'Pantry',         price: 4.99, stock: 100, desc: 'Long-grain basmati rice, 1kg.' },
  { name: 'Spaghetti',         wiki: 'Spaghetti',              category: 'Pantry',         price: 1.99, stock: 120, desc: 'Durum wheat spaghetti, 500g.' },
  { name: 'Penne Pasta',       wiki: 'Penne',                  category: 'Pantry',         price: 1.99, stock: 110, desc: 'Bronze-cut penne pasta.' },
  { name: 'Rolled Oats',       wiki: 'Oat',                    category: 'Pantry',         price: 3.49, stock: 90,  desc: 'Whole rolled oats, 1kg.' },
  { name: 'Quinoa',            wiki: 'Quinoa',                 category: 'Pantry',         price: 5.99, stock: 70,  desc: 'White quinoa grains, 500g.' },
  { name: 'Plain Flour',       wiki: 'Flour',                  category: 'Pantry',         price: 1.99, stock: 130, desc: 'All-purpose plain flour, 1kg.' },
  { name: 'Caster Sugar',      wiki: 'Sugar',                  category: 'Pantry',         price: 1.79, stock: 120, desc: 'Fine caster sugar, 1kg.' },
  { name: 'Sea Salt',          wiki: 'Sea_salt',               category: 'Pantry',         price: 2.49, stock: 150, desc: 'Coarse sea salt flakes.' },
  { name: 'Black Pepper',      wiki: 'Black_pepper',           category: 'Pantry',         price: 2.99, stock: 100, desc: 'Ground black pepper, 100g.' },
  { name: 'Extra Virgin Olive Oil', wiki: 'Olive_oil',         category: 'Pantry',         price: 7.99, stock: 60,  desc: 'Cold-pressed extra virgin olive oil.' },
  { name: 'Apple Cider Vinegar', wiki: 'Apple_cider_vinegar',  category: 'Pantry',         price: 3.49, stock: 70,  desc: 'Raw unfiltered apple cider vinegar.' },
  { name: 'Tomato Ketchup',    wiki: 'Ketchup',                category: 'Pantry',         price: 2.49, stock: 90,  desc: 'Classic tomato ketchup, 570g.' },
  { name: 'Dijon Mustard',     wiki: 'Dijon_mustard',          category: 'Pantry',         price: 2.99, stock: 75,  desc: 'Smooth Dijon mustard.' },
  { name: 'Mayonnaise',        wiki: 'Mayonnaise',             category: 'Pantry',         price: 2.79, stock: 80,  desc: 'Real egg mayonnaise.' },
  { name: 'Soy Sauce',         wiki: 'Soy_sauce',              category: 'Pantry',         price: 2.49, stock: 85,  desc: 'Dark soy sauce, 150ml.' },
  { name: 'Peanut Butter',     wiki: 'Peanut_butter',          category: 'Pantry',         price: 3.99, stock: 65,  desc: 'Smooth peanut butter, 340g.' },
  { name: 'Strawberry Jam',    wiki: 'Fruit_preserves',        category: 'Pantry',         price: 3.49, stock: 60,  desc: 'Chunky strawberry jam.' },
  { name: 'Manuka Honey',      wiki: 'Mānuka_honey',           category: 'Pantry',         price: 8.99, stock: 40,  desc: 'MGO-certified Manuka honey.' },
  { name: 'Maple Syrup',       wiki: 'Maple_syrup',            category: 'Pantry',         price: 6.99, stock: 45,  desc: 'Pure Canadian maple syrup, Grade A.' },
  { name: 'Coconut Oil',       wiki: 'Coconut_oil',            category: 'Pantry',         price: 5.99, stock: 55,  desc: 'Cold-pressed virgin coconut oil.' },
  { name: 'Chickpeas',         wiki: 'Chickpea',               category: 'Pantry',         price: 1.49, stock: 110, desc: 'Canned chickpeas in water.' },
  { name: 'Red Kidney Beans',  wiki: 'Kidney_bean',            category: 'Pantry',         price: 1.29, stock: 120, desc: 'Canned red kidney beans.' },
  { name: 'Lentils',           wiki: 'Lentil',                 category: 'Pantry',         price: 2.49, stock: 90,  desc: 'Green lentils, 500g.' },
  { name: 'Tinned Tomatoes',   wiki: 'Tomato_sauce',           category: 'Pantry',         price: 1.19, stock: 150, desc: 'Chopped tinned tomatoes, 400g.' },
  { name: 'Vegetable Stock',   wiki: 'Stock_(food)',           category: 'Pantry',         price: 1.99, stock: 80,  desc: 'Low-salt vegetable stock cubes.' },

  // Beverages
  { name: 'Ground Coffee',     wiki: 'Coffee',                 category: 'Beverages',      price: 8.99, stock: 70,  desc: 'Medium roast ground coffee, 250g.' },
  { name: 'English Breakfast Tea', wiki: 'English_breakfast_tea', category: 'Beverages',  price: 4.99, stock: 80,  desc: 'Classic English breakfast tea, 80 bags.' },
  { name: 'Orange Juice',      wiki: 'Orange_juice',           category: 'Beverages',      price: 3.49, stock: 90,  desc: 'Freshly squeezed orange juice, 1L.' },
  { name: 'Sparkling Water',   wiki: 'Carbonated_water',       category: 'Beverages',      price: 1.49, stock: 150, desc: 'Natural sparkling mineral water, 1.5L.' },
  { name: 'Almond Milk',       wiki: 'Almond_milk',            category: 'Beverages',      price: 2.99, stock: 70,  desc: 'Unsweetened almond milk, 1L.' },
  { name: 'Coconut Water',     wiki: 'Coconut_water',          category: 'Beverages',      price: 2.49, stock: 65,  desc: 'Pure coconut water, 330ml.' },
  { name: 'Green Tea',         wiki: 'Green_tea',              category: 'Beverages',      price: 3.99, stock: 75,  desc: 'Japanese sencha green tea, 20 bags.' },
  { name: 'Whole Milk Latte',  wiki: 'Latte',                  category: 'Beverages',      price: 2.99, stock: 50,  desc: 'Ready-to-drink whole milk latte.' },

  // Snacks
  { name: 'Potato Crisps',     wiki: 'Potato_chip',            category: 'Snacks',         price: 2.49, stock: 100, desc: 'Salted potato crisps, 150g.' },
  { name: 'Tortilla Chips',    wiki: 'Tortilla_chip',          category: 'Snacks',         price: 2.99, stock: 90,  desc: 'Lightly salted tortilla chips, 200g.' },
  { name: 'Dark Chocolate',    wiki: 'Types_of_chocolate',     category: 'Snacks',         price: 3.49, stock: 80,  desc: '70% dark chocolate bar, 100g.' },
  { name: 'Granola Bar',       wiki: 'Granola_bar',            category: 'Snacks',         price: 1.99, stock: 110, desc: 'Oat and honey granola bar.' },
  { name: 'Mixed Nuts',        wiki: 'Nut_(fruit)',            category: 'Snacks',         price: 5.99, stock: 60,  desc: 'Unsalted mixed nuts, 200g.' },
  { name: 'Popcorn',           wiki: 'Popcorn',                category: 'Snacks',         price: 1.99, stock: 90,  desc: 'Lightly salted popcorn, 80g.' },
  { name: 'Hummus',            wiki: 'Hummus',                 category: 'Snacks',         price: 2.99, stock: 65,  desc: 'Classic chickpea hummus, 200g.' },
  { name: 'Salted Pretzels',   wiki: 'Pretzel',                category: 'Snacks',         price: 2.49, stock: 80,  desc: 'Crunchy salted pretzel twists.' },
  { name: 'Gummy Bears',       wiki: 'Gummy_bear',             category: 'Snacks',         price: 1.99, stock: 100, desc: 'Fruity gummy bear sweets, 200g.' },
  { name: 'Rice Cakes',        wiki: 'Rice_cake',              category: 'Snacks',         price: 1.79, stock: 85,  desc: 'Plain rice cakes, 130g.' },

  // Frozen
  { name: 'Frozen Peas',       wiki: 'Pea',                    category: 'Frozen',         price: 1.99, stock: 120, desc: 'Frozen garden peas, 900g.' },
  { name: 'Vanilla Ice Cream', wiki: 'Ice_cream',              category: 'Frozen',         price: 4.99, stock: 55,  desc: 'Classic vanilla ice cream, 1L.' },
  { name: 'Fish Fingers',      wiki: 'Fish_finger',            category: 'Frozen',         price: 3.99, stock: 60,  desc: 'Breaded fish fingers, 10-pack.' },
  { name: 'Frozen Pizza',      wiki: 'Pizza',                  category: 'Frozen',         price: 5.99, stock: 50,  desc: 'Margherita frozen pizza, 350g.' },
  { name: 'Edamame',           wiki: 'Edamame',                category: 'Frozen',         price: 2.99, stock: 70,  desc: 'Frozen shelled edamame, 400g.' },
];

async function fetchWikiImage(wikiTitle) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiTitle)}&prop=pageimages&format=json&pithumbsize=500`;
    const res = await fetch(url, { headers: { 'User-Agent': 'MERN-Grocery/1.0 (project@example.com)' } });
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId !== '-1' && pages[pageId].thumbnail) {
      return pages[pageId].thumbnail.source;
    }
  } catch (e) { /* ignore */ }
  return null;
}

async function main() {
  console.log(`Fetching images for ${groceryItems.length} genuine products...`);
  const products = [];

  for (let i = 0; i < groceryItems.length; i++) {
    const item = groceryItems[i];
    process.stdout.write(`[${i+1}/${groceryItems.length}] ${item.name}... `);
    const image = await fetchWikiImage(item.wiki);
    if (image) {
      products.push({
        name: item.name,
        category: item.category,
        price: item.price,
        stock: item.stock,
        image,
        description: item.desc
      });
      console.log('✓');
    } else {
      console.log('✗ no image — skipped');
    }
    await new Promise(r => setTimeout(r, 120)); // rate limit
  }

  console.log(`\n✅ ${products.length} products with valid images`);
  const output = `const products = ${JSON.stringify(products, null, 2)};\n\nmodule.exports = products;\n`;
  fs.writeFileSync('./backend/data/products.js', output);
  console.log('Saved to backend/data/products.js');
}

main();
