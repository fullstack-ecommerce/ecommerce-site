import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
   return knex.schema.createTable("comments", table => {
      table.increments();
      table.string("comment", 255).notNullable();
   })
   .createTable("product_comments", table => {
      table.increments();
      table.integer("product_id")
         .notNullable()
         .unsigned()
         .references("product.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table.integer("comment_id")
         .notNullable()
         .unsigned()
         .references("comments.id")
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
      .dropTableIfExists("product_comments")
      .dropTableIfExists("comments");
};
