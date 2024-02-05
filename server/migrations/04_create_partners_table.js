/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('partners', (table) => {
      table.increments('id').primary();
      table
        .string("name");
      table
        .string("image_url");
      table
        .string("store_website");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('partners');
  };
  