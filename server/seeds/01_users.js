/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      first_name: 'Parmin',
      last_name: 'Aujla',
      email: 'paujla@ecostar.com',
      password: 'paujla',
      phone: '+1 (646) 123-1234',
    },
    {
      id: 2,
      first_name: 'Greame',
      last_name: 'Lyon',
      email: 'glyon@ecostar.com',
      password: 'glyon',
      phone: '+1 (646) 123-1234',
    },
    {
      id: 3,
      first_name: 'Brad',
      last_name: 'MacDonald',
      email: 'bmcdonald@ecostar.com',
      password: 'bmcdonald',
      phone: '+1 (646) 123-1234',
    },
    {
      id: 4,
      first_name: 'Gary',
      last_name: 'Wong',
      email: 'gwong@ecostar.com',
      password: 'gwong',
      phone: '+1 (646) 123-1234',
    },
    {
      id: 5,
      first_name: 'Sharon',
      last_name: 'Ng',
      email: 'sng@ecostar.com',
      password: 'sng',
      phone: '+1 (646) 123-1234',
    },
  ]);
};