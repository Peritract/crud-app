const express = require("express");

const logRoutes = require("./middleware/log-routes");

const userController = require("./controllers/user");

const api = express();

api.use(logRoutes);

api.use("/users", userController);

module.exports = api;