import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
   return knex.schema.createTable("product", table => {
      table.increments();
      table.string("name",255).notNullable();
      table.string("description",255).notNullable();
      table.integer("price").notNullable();
   })
   .createTable("sizes", table => {
      table.increments();
      table.enu('size', ["xxl", "xl", "large", "medium", "small"])
         .notNullable();
   })
   .createTable("images", table => {
      table.increments();
      table.string("img_url");
   })
   .createTable("product_size", table => {
      table.increments();
      table.integer("size_id")
         .unsigned()
         .notNullable()
         .references("sizes.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table.integer("product_id")
         .unsigned()
         .notNullable()
         .references("product.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   })
   .createTable("product_img", table => {
      table.increments();
      table.integer("product_id")
         .unsigned()
         .notNullable()
         .references("product.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
      table.integer("img_id")
         .unsigned()
         .notNullable()
         .references("images.id")
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
   })
};

export async function down(knex: Knex): Promise<any> {
   return knex.schema
      .dropTableIfExists("product_img")
      .dropTableIfExists("product_size")
      .dropTableIfExists("images")
      .dropSchemaIfExists("sizes")
      .dropTableIfExists("product");
};
