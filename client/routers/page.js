const { Router } = require('express');

const pageRouter = Router();

pageRouter.post("/login", (req, res) => {
    console.log(req.body);
    res.send(400);
})

module.exports = pageRouter;