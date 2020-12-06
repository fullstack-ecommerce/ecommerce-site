import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('product').insert([
        {name: "shirt", price: 10.00},
        {name: "shorts", price: 15.00},
        {name: "jacket", price: 50.00},
        {name: "socks", price: 9.99},
        {name: "belt", price: 10.00},
      ]);
    });
};
