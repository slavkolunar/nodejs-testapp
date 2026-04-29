const { pgTable, uuid, text, timestamp } = require('drizzle-orm/pg-core');

const testTable = pgTable('test_table', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});

module.exports = { testTable };