const { Router } = require("express");

const verifyToken = require("../middleware/verifyToken");

const userController = require("../controllers/user");

const userRouter = Router();

userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
userRouter.get("/:username", userController.show);
userRouter.delete("/:username", verifyToken, userController.destroy);

module.exports = userRouter;