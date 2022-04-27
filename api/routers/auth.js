const { Router } = require("express");

const authController = require("../controllers/auth");

const authRouter = Router();

authRouter.post("/login", authController.logIn);

module.exports = authRouter;