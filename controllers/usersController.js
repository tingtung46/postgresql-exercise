exports.usersListGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.render("index", { title: "User List" });
};

exports.usersCreateGet = (req, res) => {
  res.render("new", { title: "Create New User" });
};

exports.usersCreatePost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/");
};
