import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
   return knex.schema.createTable("users", table => {
      table.increments();
      table.string("username",255).notNullable();
      table.string("email", 128).notNullable().unique();
      table.string("password",128).notNullable();
      table.string("reset_link",255);
   })
   .createTable("cart_item", table => {
      table.increments();
      table.string("product_name",128).notNullable();
      table.integer("product_price").notNullable();
      table.integer("quantity").notNullable();
      table.string("product_img",255).notNullable();
   })
   .createTable("user_cart", table => {
      table.increments();
      table.integer("user_id")
         .unsigned()
         .notNullable()
         .references("users.id")
         .onUpdate('CASCADE')
         .onDelete("CASCADE");
      table.integer("cart_item_id")
         .unsigned()
         .notNullable()
         .references("cart_item.id")
         .onUpdate('CASCADE')
         .onDelete("CASCADE");
   })
};

export async function down(knex: Knex): Promise<any> {
   return knex.schema
      .dropTableIfExists("user_cart")
      .dropTableIfExists("cart_item")
      .dropTableIfExists("users");
};