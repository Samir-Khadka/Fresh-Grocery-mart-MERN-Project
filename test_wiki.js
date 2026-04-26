const fs = require('fs');

async function testWiki() {
  const titles = ['Apple', 'Banana', 'Carrot', 'Milk'];
  for (const title of titles) {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=500`, {
      headers: { 'User-Agent': 'MERN-Bot/1.0 (test@example.com)' }
    });
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pages[pageId].thumbnail) {
      console.log(title, pages[pageId].thumbnail.source);
    } else {
      console.log(title, 'No thumbnail');
    }
  }
}
testWiki();
