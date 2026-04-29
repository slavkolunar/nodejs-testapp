const repo = require('../repositories/itemRepository');

async function createItem(name) {
  if (!name) throw new Error('name is required');

  return await repo.insertItem(name);
}

async function getItems() {
  return await repo.fetchItems();
}

module.exports = {
  createItem,
  getItems
};