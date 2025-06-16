const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: "localhost",
  user: process.env.POSTGRES_USER,
  database: "top_users",
  password: process.env.POSTGRES_PASS,
  port: 5432,
});
