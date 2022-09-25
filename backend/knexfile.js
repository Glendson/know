// Update with your config settings.

module.exports = {


  client: 'postgresql',
  connection: {
    database: 'know',
    user: 'postgres',
    password: '2112'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
