const express = require("express");

const logRoutes = require("./middleware/log-routes");

const api = express();

api.use(logRoutes);

module.exports = api;