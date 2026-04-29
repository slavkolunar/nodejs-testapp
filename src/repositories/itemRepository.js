const { db } = require('../db/client');
const { testTable } = require('../db/schema');
const { eq } = require('drizzle-orm');

async function insertItem(name) {
  const result = await db
    .insert(testTable)
    .values({ name })
    .returning();

  return result;
}

async function fetchItems() {
  const result = await db
    .select()
    .from(testTable);

  return result;
}

module.exports = {
  insertItem,
  fetchItems
};