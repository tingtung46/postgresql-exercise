const express = require("express");
const app = express();
const userRouter = require("./routes/usersRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express is listening at ${PORT}`));
