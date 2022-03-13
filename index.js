const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./src/config/db");

const userController = require("./src/controllers/user.controller");
app.use(express.json());
app.use(cors());
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 100000000000,
  })
);
app.use("/user", userController);
app.use(express.static("public"));

app.listen(process.env.PORT || 2525, async () => {
  await connect();
  console.log("listing on port 2525");
});
