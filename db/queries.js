const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsername(keyword) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE $1",
    [`%${keyword}%`]
  );
  return rows;
}

async function deleteUsername(id) {
  await pool.query("DELETE FROM usernames WHERE id = $1", [id]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsername,
  deleteUsername,
};
