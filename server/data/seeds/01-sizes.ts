import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('sizes')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('sizes').insert([
       {size: "xxl"},
       {size: "xl"},
       {size: "large"},
       {size: "medium"},
       {size: "small"},
      ]);
    });
};
