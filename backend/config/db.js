const cfg = require("../knexfile.js")
const knex = require("knex")(cfg)

knex.migrate.latest([cfg])

module.exports = knex