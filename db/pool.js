const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "tingtung",
  database: "top_users",
  password: "Rizuna46",
  port: 5432,
});
