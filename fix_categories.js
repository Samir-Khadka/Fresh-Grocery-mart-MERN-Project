const fs = require('fs');
let content = fs.readFileSync('./backend/data/products.js', 'utf8');
content = content.replace(/"Dairy & Eggs"/g, '"Dairy"');
content = content.replace(/"Meat & Seafood"/g, '"Meat"');
fs.writeFileSync('./backend/data/products.js', content);

// Verify
delete require.cache[require.resolve('./backend/data/products.js')];
const p = require('./backend/data/products.js');
const d = p.filter(x => x.category === 'Dairy');
const m = p.filter(x => x.category === 'Meat');
console.log('Dairy products (' + d.length + '):', d.map(x => x.name).join(', '));
console.log('Meat products (' + m.length + '):', m.map(x => x.name).join(', '));
console.log('Total products:', p.length);
