/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('total_quantity').del();
  await knex('total_quantity').insert([
    {
      id: 1,
      total_co2_saved_kg: 1256.85,
    },
  ]);
};