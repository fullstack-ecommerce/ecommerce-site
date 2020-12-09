import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('comments').insert([
         {comment: "this is comment one"},
         {comment: "this is comment two"},
         {comment: "this is comment three"},
         {comment: "this is comment four"},
         {comment: "this is comment five"},
      ]);
    });
};
