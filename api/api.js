const express = require("express");

const logRoutes = require("./middleware/log-routes");

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");

const api = express();

api.use(express.json());
api.use(express.urlencoded({extended:false}));

api.use(logRoutes);

api.use("/users", userRouter);
api.use("/auth", authRouter);

module.exports = api;