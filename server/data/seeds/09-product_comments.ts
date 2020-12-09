import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('product_comments')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('product_comments').insert([
         {product_id: 5,comment_id: 5, user_id: 3},
         {product_id: 4,comment_id: 3, user_id: 2},
         {product_id: 3,comment_id: 4, user_id: 1},
         {product_id: 2,comment_id: 2, user_id: 3},
         {product_id: 1,comment_id: 1, user_id: 2},
         {product_id: 5,comment_id: 5, user_id: 1},
      ]);
    });
};
