import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('product_ratings')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('product_ratings').insert([
         {product_id: 5,rating_id: 5, user_id: 3},
         {product_id: 4,rating_id: 3, user_id: 2},
         {product_id: 3,rating_id: 4, user_id: 1},
         {product_id: 2,rating_id: 2, user_id: 3},
         {product_id: 1,rating_id: 1, user_id: 2},
         {product_id: 5,rating_id: 5, user_id: 1},
      ]);
    });
};
