import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('cart_item')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('cart_item').insert([
        {product_name: "shirt", product_price: 10.00, quantity: 1, product_img: "productimg.com"},
        {product_name: "jacket", product_price: 50.00, quantity: 2, product_img: "productimg.com"},
        {product_name: "shorts", product_price: 10.00, quantity: 4, product_img: "productimg.com"},
      ]);
    });
};
