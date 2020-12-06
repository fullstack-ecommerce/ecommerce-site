import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('product_img')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('product_img').insert([
        {product_id: 1, img_id: 1},
        {product_id: 1, img_id: 4},
        {product_id: 2, img_id: 2},
        {product_id: 3, img_id: 5},
        {product_id: 4, img_id: 2},
        {product_id: 5, img_id: 2},
        {product_id: 4, img_id: 4},
        {product_id: 3, img_id: 5},
        {product_id: 1, img_id: 2},
        {product_id: 5, img_id: 3},
      ]);
    });
};
