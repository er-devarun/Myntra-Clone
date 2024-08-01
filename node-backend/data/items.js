const fs = require('node:fs/promises');
const path = require('path');

// Define paths relative to the current file
const itemsFilePath = path.join(__dirname, '..', 'items.json');

async function getStoredItems() {
  const rawFileContent = await fs.readFile(itemsFilePath, { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile(itemsFilePath, JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
