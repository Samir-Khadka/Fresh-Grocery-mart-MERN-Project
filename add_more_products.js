const fs = require('fs');

const newItems = [
  // Fruits
  { name: 'Pomegranate',       wiki: 'Pomegranate',          category: 'Fruits',    price: 2.99, stock: 60,  desc: 'Ruby-red pomegranate, packed with antioxidants.' },
  { name: 'Dragon Fruit',      wiki: 'Pitaya',               category: 'Fruits',    price: 4.99, stock: 40,  desc: 'Exotic pink dragon fruit.' },
  { name: 'Passion Fruit',     wiki: 'Passionfruit',         category: 'Fruits',    price: 1.49, stock: 55,  desc: 'Fragrant tropical passion fruit.' },
  { name: 'Coconut',           wiki: 'Coconut',              category: 'Fruits',    price: 2.49, stock: 45,  desc: 'Fresh whole coconut.' },
  { name: 'Grapefruit',        wiki: 'Grapefruit',           category: 'Fruits',    price: 1.29, stock: 70,  desc: 'Tangy pink grapefruit.' },
  { name: 'Apricot',           wiki: 'Apricot',              category: 'Fruits',    price: 2.49, stock: 50,  desc: 'Sweet golden apricots.' },
  { name: 'Fresh Fig',         wiki: 'Common_fig',           category: 'Fruits',    price: 3.49, stock: 35,  desc: 'Ripe black mission figs.' },
  { name: 'Guava',             wiki: 'Guava',                category: 'Fruits',    price: 1.99, stock: 50,  desc: 'Tropical pink-fleshed guava.' },
  { name: 'Lychee',            wiki: 'Lychee',               category: 'Fruits',    price: 3.99, stock: 40,  desc: 'Fragrant fresh lychees.' },
  { name: 'Jackfruit',         wiki: 'Jackfruit',            category: 'Fruits',    price: 5.99, stock: 25,  desc: 'Large tropical jackfruit.' },

  // Vegetables
  { name: 'Beetroot',          wiki: 'Beetroot',             category: 'Vegetables', price: 1.49, stock: 90,  desc: 'Earthy fresh beetroot.' },
  { name: 'Aubergine',         wiki: 'Eggplant',             category: 'Vegetables', price: 1.79, stock: 75,  desc: 'Glossy purple aubergine.' },
  { name: 'Kale',              wiki: 'Kale',                 category: 'Vegetables', price: 2.49, stock: 80,  desc: 'Curly green kale leaves.' },
  { name: 'Brussels Sprouts',  wiki: 'Brussels_sprout',      category: 'Vegetables', price: 2.29, stock: 65,  desc: 'Fresh Brussels sprouts.' },
  { name: 'Leek',              wiki: 'Leek',                 category: 'Vegetables', price: 1.49, stock: 70,  desc: 'Mild-flavoured fresh leeks.' },
  { name: 'Globe Artichoke',   wiki: 'Globe_artichoke',      category: 'Vegetables', price: 2.99, stock: 40,  desc: 'Tender globe artichoke.' },
  { name: 'Bok Choy',          wiki: 'Bok_choy',             category: 'Vegetables', price: 1.99, stock: 60,  desc: 'Crisp baby bok choy.' },
  { name: 'Radish',            wiki: 'Radish',               category: 'Vegetables', price: 0.99, stock: 100, desc: 'Crunchy red radishes.' },
  { name: 'Pumpkin',           wiki: 'Pumpkin',              category: 'Vegetables', price: 3.49, stock: 50,  desc: 'Whole orange pumpkin.' },
  { name: 'Turnip',            wiki: 'Turnip',               category: 'Vegetables', price: 1.29, stock: 80,  desc: 'Fresh white turnips.' },

  // Dairy
  { name: 'Gouda Cheese',      wiki: 'Gouda_cheese',         category: 'Dairy',     price: 5.49, stock: 45,  desc: 'Mild and creamy Gouda.' },
  { name: 'Brie',              wiki: 'Brie',                 category: 'Dairy',     price: 6.49, stock: 30,  desc: 'Soft-ripened French Brie.' },
  { name: 'Cream Cheese',      wiki: 'Cream_cheese',         category: 'Dairy',     price: 2.99, stock: 60,  desc: 'Smooth spreadable cream cheese.' },
  { name: 'Sour Cream',        wiki: 'Sour_cream',           category: 'Dairy',     price: 1.99, stock: 55,  desc: 'Thick tangy sour cream.' },
  { name: 'Blue Cheese',       wiki: 'Blue_cheese',          category: 'Dairy',     price: 5.99, stock: 30,  desc: 'Pungent creamy blue cheese.' },
  { name: 'Goat Cheese',       wiki: 'Chèvre',               category: 'Dairy',     price: 4.99, stock: 35,  desc: 'Fresh soft goat cheese.' },
  { name: 'Greek Yogurt',      wiki: 'Greek_yogurt',         category: 'Dairy',     price: 2.99, stock: 70,  desc: 'Thick strained Greek yogurt.' },
  { name: 'Eggs',              wiki: 'Chicken_egg',          category: 'Dairy',     price: 3.49, stock: 120, desc: 'Farm fresh free range eggs, 12 pack.' },

  // Meat
  { name: 'Pork Sausages',     wiki: 'Sausage',              category: 'Meat',      price: 4.99, stock: 55,  desc: 'Traditional pork sausages, 6 pack.' },
  { name: 'Smoked Ham',        wiki: 'Ham',                  category: 'Meat',      price: 6.99, stock: 40,  desc: 'Thick-cut smoked honey ham.' },
  { name: 'Duck Breast',       wiki: 'Duck_as_food',         category: 'Meat',      price: 11.99, stock: 25, desc: 'Premium duck breast fillet.' },
  { name: 'Cod Fillet',        wiki: 'Atlantic_cod',         category: 'Meat',      price: 8.99, stock: 35,  desc: 'Fresh sustainable cod fillet.' },
  { name: 'Mackerel',          wiki: 'Atlantic_mackerel',    category: 'Meat',      price: 5.99, stock: 40,  desc: 'Fresh whole Atlantic mackerel.' },
  { name: 'Scallops',          wiki: 'Scallop',              category: 'Meat',      price: 14.99, stock: 20, desc: 'Hand-dived king scallops.' },
  { name: 'Venison Steak',     wiki: 'Venison',              category: 'Meat',      price: 13.99, stock: 20, desc: 'Lean wild venison steak.' },

  // Bakery
  { name: 'Focaccia',          wiki: 'Focaccia',             category: 'Bakery',    price: 3.99, stock: 25,  desc: 'Rosemary and sea salt focaccia.' },
  { name: 'Naan Bread',        wiki: 'Naan',                 category: 'Bakery',    price: 1.99, stock: 40,  desc: 'Soft tandoor-baked naan bread.' },
  { name: 'Rye Bread',         wiki: 'Rye_bread',            category: 'Bakery',    price: 3.49, stock: 30,  desc: 'Dense dark rye loaf.' },
  { name: 'Brioche',           wiki: 'Brioche',              category: 'Bakery',    price: 3.99, stock: 25,  desc: 'Buttery French brioche loaf.' },
  { name: 'Danish Pastry',     wiki: 'Danish_pastry',        category: 'Bakery',    price: 2.49, stock: 30,  desc: 'Flaky cream cheese Danish.' },

  // Pantry
  { name: 'Turmeric Powder',   wiki: 'Turmeric',             category: 'Pantry',    price: 2.99, stock: 100, desc: 'Ground turmeric spice, 100g.' },
  { name: 'Ground Cumin',      wiki: 'Cumin',                category: 'Pantry',    price: 2.49, stock: 100, desc: 'Aromatic ground cumin.' },
  { name: 'Smoked Paprika',    wiki: 'Paprika',              category: 'Pantry',    price: 2.49, stock: 90,  desc: 'Rich smoked paprika spice.' },
  { name: 'Ground Cinnamon',   wiki: 'Cinnamon',             category: 'Pantry',    price: 2.99, stock: 90,  desc: 'Sweet Ceylon cinnamon powder.' },
  { name: 'Balsamic Vinegar',  wiki: 'Balsamic_vinegar',     category: 'Pantry',    price: 4.99, stock: 60,  desc: 'Aged Italian balsamic vinegar.' },
  { name: 'Tahini',            wiki: 'Tahini',               category: 'Pantry',    price: 3.99, stock: 55,  desc: 'Smooth sesame seed paste.' },
  { name: 'Fish Sauce',        wiki: 'Fish_sauce',           category: 'Pantry',    price: 2.49, stock: 65,  desc: 'Authentic Thai fish sauce.' },
  { name: 'Sriracha Sauce',    wiki: 'Sriracha',             category: 'Pantry',    price: 3.49, stock: 70,  desc: 'Hot chilli sriracha sauce.' },
  { name: 'Brown Rice',        wiki: 'Brown_rice',           category: 'Pantry',    price: 3.99, stock: 90,  desc: 'Wholegrain brown rice, 1kg.' },
  { name: 'Fusilli Pasta',     wiki: 'Fusilli',              category: 'Pantry',    price: 1.99, stock: 100, desc: 'Spiral fusilli pasta, 500g.' },
  { name: 'Arborio Rice',      wiki: 'Arborio_rice',         category: 'Pantry',    price: 3.99, stock: 65,  desc: 'Creamy risotto arborio rice.' },
  { name: 'Baking Powder',     wiki: 'Baking_powder',        category: 'Pantry',    price: 1.49, stock: 110, desc: 'Raising agent baking powder.' },
  { name: 'Cornstarch',        wiki: 'Corn_starch',          category: 'Pantry',    price: 1.29, stock: 100, desc: 'Fine cornstarch thickener.' },
  { name: 'Worcestershire Sauce', wiki: 'Worcestershire_sauce', category: 'Pantry', price: 2.49, stock: 70,  desc: 'Classic Worcestershire sauce.' },

  // Beverages
  { name: 'Oat Milk',          wiki: 'Oat_milk',             category: 'Beverages', price: 2.49, stock: 80,  desc: 'Barista oat milk, 1L.' },
  { name: 'Matcha Powder',     wiki: 'Matcha',               category: 'Beverages', price: 9.99, stock: 40,  desc: 'Ceremonial grade matcha, 50g.' },
  { name: 'Apple Juice',       wiki: 'Apple_juice',          category: 'Beverages', price: 2.49, stock: 90,  desc: 'Pressed apple juice, 1L.' },
  { name: 'Chamomile Tea',     wiki: 'Chamomile_tea',        category: 'Beverages', price: 3.49, stock: 65,  desc: 'Soothing chamomile tea, 20 bags.' },
  { name: 'Peppermint Tea',    wiki: 'Peppermint',           category: 'Beverages', price: 3.49, stock: 65,  desc: 'Refreshing peppermint herbal tea.' },
  { name: 'Hot Chocolate',     wiki: 'Hot_chocolate',        category: 'Beverages', price: 4.99, stock: 55,  desc: 'Rich premium hot chocolate powder.' },
  { name: 'Lemonade',          wiki: 'Lemonade',             category: 'Beverages', price: 1.99, stock: 80,  desc: 'Sparkling cloudy lemonade, 1L.' },

  // Snacks
  { name: 'Cashews',           wiki: 'Cashew',               category: 'Snacks',    price: 4.99, stock: 70,  desc: 'Roasted salted cashew nuts, 200g.' },
  { name: 'Almonds',           wiki: 'Almond',               category: 'Snacks',    price: 4.49, stock: 75,  desc: 'Raw whole almonds, 200g.' },
  { name: 'Walnuts',           wiki: 'Walnut',               category: 'Snacks',    price: 5.49, stock: 60,  desc: 'Shelled walnut halves, 200g.' },
  { name: 'Sunflower Seeds',   wiki: 'Sunflower_seed',       category: 'Snacks',    price: 2.49, stock: 90,  desc: 'Roasted sunflower seeds, 150g.' },
  { name: 'Beef Jerky',        wiki: 'Jerky',                category: 'Snacks',    price: 5.99, stock: 50,  desc: 'Smoky beef jerky strips, 100g.' },
  { name: 'Dried Mango',       wiki: 'Dried_fruit',          category: 'Snacks',    price: 3.99, stock: 60,  desc: 'Sweet dried mango slices, 150g.' },
  { name: 'Peanuts',           wiki: 'Peanut',               category: 'Snacks',    price: 2.49, stock: 100, desc: 'Dry roasted peanuts, 200g.' },

  // Frozen
  { name: 'Frozen Waffles',    wiki: 'Waffle',               category: 'Frozen',    price: 3.49, stock: 55,  desc: 'Belgian-style frozen waffles, 6 pack.' },
  { name: 'Frozen Mixed Berries', wiki: 'Berry',             category: 'Frozen',    price: 3.99, stock: 60,  desc: 'Frozen mixed berry blend, 500g.' },
  { name: 'Frozen French Fries', wiki: 'French_fries',       category: 'Frozen',    price: 2.49, stock: 70,  desc: 'Crispy frozen French fries, 1kg.' },
  { name: 'Frozen Spinach',    wiki: 'Spinach',              category: 'Frozen',    price: 1.99, stock: 80,  desc: 'Chopped frozen spinach, 450g.' },
  { name: 'Frozen Shrimp',     wiki: 'Shrimp',               category: 'Frozen',    price: 7.99, stock: 45,  desc: 'Peeled frozen shrimp, 400g.' },
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
  // Load existing products — DO NOT TOUCH
  const existing = require('./backend/data/products.js');
  console.log(`Existing products: ${existing.length} (will not be modified)`);

  const added = [];
  console.log(`\nFetching images for ${newItems.length} new items...\n`);

  for (let i = 0; i < newItems.length; i++) {
    const item = newItems[i];
    process.stdout.write(`[${i+1}/${newItems.length}] ${item.name}... `);
    const image = await fetchWikiImage(item.wiki);
    if (image) {
      added.push({ name: item.name, category: item.category, price: item.price, stock: item.stock, image, description: item.desc });
      console.log('✓');
    } else {
      console.log('✗ skipped (no image)');
    }
    await new Promise(r => setTimeout(r, 120));
  }

  const allProducts = [...existing, ...added];
  const output = `const products = ${JSON.stringify(allProducts, null, 2)};\n\nmodule.exports = products;\n`;
  require('fs').writeFileSync('./backend/data/products.js', output);

  console.log(`\n✅ Added ${added.length} new products`);
  console.log(`✅ Total products: ${allProducts.length}`);
}

main();
