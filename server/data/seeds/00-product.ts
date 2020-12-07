import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('product').insert([
        {name: "shirt", description: "short desc", price: 10.00},
        {name: "shorts", description: "short desc", price: 15.00},
        {name: "jacket", description: "short desc", price: 50.00},
        {name: "socks", description: "short desc", price: 9.99},
        {name: "belt", description: "short desc", price: 10.00},
      ]);
    });
};
