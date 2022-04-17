const { Router } = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const userController = Router();

// Index
userController.get("/", async (req, res) => {
    try {
        const result = await User.getAll()
        const users = result.map(u => u.details);
        res.status(200).json({ success : true, users : users });
    } catch (err) {
        res.status(500).json({ success : false, message : err.message });
    }
})

// Create
userController.post("/", bodyParser.json(), async (req, res) => {
    try {

        // username & password are absolutely required
        if (!req.body.username || !req.body.password) {
            throw { code: 400, message: "Insufficient information provided to create account"}
        }

        const hashed = await bcrypt.hash(req.body.password,
                                         parseInt(process.env.BCRYPT_SALT_ROUNDS));
        const user = await User.create({ ...req.body, password: hashed, role: "user" });
        res.status(201).json({ success : true, user : user.details });
    } catch (err) {
        res.status(err.code).json({ success : false, message : err.message })
    }
})

// Show
userController.get("/:username", async (req, res) => {
    try {
        const user = await User.getUserByUsername(req.params.username);
        res.status(200).json({ success : true, user : user.details })
    } catch (err) {
        if (!err.hasOwnProperty("code")) {
            err = {code : 500, message : err.message }
        }
        res.status(err.code).json({ success : false, message : err.message })
    }
})

module.exports = userController;