import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('images')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('images').insert([
        {img_url: "exampleone"},
        {img_url: "exampletwo"},
        {img_url: "examplethree"},
        {img_url: "examplefour"},
        {img_url: "examplefive"},
      ]);
    });
};
