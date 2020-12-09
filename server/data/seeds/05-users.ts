import * as Knex from 'knex';
import bcrypt from 'bcryptjs';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            username: "user One", 
            email: "userone@gmail.com",
            password: await bcrypt.hash("password", 8), 
            is_admin: false
         },
        {
            username: "user Two", 
            email: "usertwo@gmail.com",
            password: "usertwopass", 
            is_admin: false
         },
        {
            username: "user Three", 
            email: "userthree@gmail.com",
            password: "userthreepass", 
            is_admin: false
        },
      ]);
    });
};
