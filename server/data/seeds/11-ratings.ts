import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('ratings')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('ratings').insert([
         {rating: "ratingon1"},
         {rating: "ratingon2"},
         {rating: "ratingon3"},
         {rating: "ratingon4"},
         {rating: "ratingon5"},
      ]);
    });
};
