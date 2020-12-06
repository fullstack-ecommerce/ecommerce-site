import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('user_cart')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('user_cart').insert([
        {user_id: 1, cart_item_id: 1},
        {user_id: 2, cart_item_id: 1},
        {user_id: 3, cart_item_id: 2},
        {user_id: 3, cart_item_id: 2},
        {user_id: 1, cart_item_id: 3},
        {user_id: 1, cart_item_id: 3},
        {user_id: 2, cart_item_id: 1},
      ]);
    });
};
