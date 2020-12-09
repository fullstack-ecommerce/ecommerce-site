import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
   return knex.schema.createTable("ratings", table => {
      table.increments();
      table.float("rating").notNullable();
   })
   .createTable("product_ratings", table => {
      table.increments();
      table.integer("product_id")
         .notNullable()
         .unsigned()
         .references("product.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table.integer("rating_id")
         .notNullable()
         .unsigned()
         .references("ratings.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table.integer("user_id")
         .notNullable()
         .unsigned()
         .references("users.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   })
};

export async function down(knex: Knex): Promise<any> {
   return knex.schema
      .dropTableIfExists("product_ratings")
      .dropTableIfExists("ratings");
};
