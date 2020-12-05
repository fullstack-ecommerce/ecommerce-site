// Update with your config settings.

module.exports = {

  development: {
     useNullasDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './data/fullstack_ecommerce.db3'
    },
    migrations: {
       directory: "./data/migrations"
    },
    seeds: {
       directory: "./data/seeds"
    },
    pool: {
       afterCreate: (conn: { run: (arg0: string, arg1: any) => void; }, done: any) => {
          conn.run("PRAGMA foreign_keys = ON", done);
       }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
