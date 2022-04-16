const { Router } = require("express");

const User = require("../models/user");

const userController = Router();

userController.get("/", async (req, res) => {
    try {
        const result = await User.getAll()
        const users = result.map(u => u.details);
        res.status(200).json({ success : true, users : users });
    } catch (err) {
        res.status(500).json({ success : false, message : err.message });
    }
})

module.exports = userController;