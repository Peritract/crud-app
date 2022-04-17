const express = require("express");

const logRoutes = require("./middleware/log-routes");

const userController = require("./controllers/user");
const authController = require("./controllers/auth");

const api = express();

api.use(logRoutes);

api.use("/users", userController);
api.use("/auth", authController);

module.exports = api;