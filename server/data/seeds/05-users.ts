import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "user One", email: "userone@gmail.com",password: "useronepass"},
        {username: "user Two", email: "usertwo@gmail.com",password: "usertwopass"},
        {username: "user Three", email: "userthree@gmail.com",password: "userthreepass"},
      ]);
    });
};
