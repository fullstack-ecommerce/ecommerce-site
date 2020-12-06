import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('product_size')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('product_size').insert([
        {size_id: 1, product_id: 1},
        {size_id: 2, product_id: 2},
        {size_id: 3, product_id: 3},
        {size_id: 5, product_id: 4},
        {size_id: 4, product_id: 5},
        {size_id: 2, product_id: 2},
        {size_id: 1, product_id: 1},
        {size_id: 3, product_id: 2},
      ]);
    });
};
