const db = require("../db/queries");

exports.usersListGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", { title: "User List", usernames: usernames });
};

exports.usersCreateGet = (req, res) => {
  res.render("new", { title: "Create New User" });
};

exports.usersCreatePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
