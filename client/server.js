const express = require("express");
const path = require("path");

const pageRouter = require("./routers/page");
const logRoutes = require("./middleware/log-routes");

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended : false}));

server.use(logRoutes);

server.use("/static", express.static(path.join(__dirname, "public")));

server.use("/", pageRouter);

module.exports = server;