const { Router } = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

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

userController.post("/", bodyParser.json(), async (req, res) => {
    try {
        const hashed = await bcrypt.hash(req.body.password,
                                         parseInt(process.env.BCRYPT_SALT_ROUNDS));
        const user = await User.create({ ...req.body, password: hashed, role: "user" });
        res.status(201).json({ success : true, user : user.details });
    } catch (err) {
        console.log(err);
        res.status(err.code).json({ success : false, message : err.message })
    }
})

module.exports = userController;