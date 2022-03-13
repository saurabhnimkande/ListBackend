const express = require("express");
const app = express();
const cors = require("cors");

const userController = require("./controllers/user.controller");
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
app.use("/", userController);

module.exports = app;
