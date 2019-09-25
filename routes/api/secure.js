const express = require("express");
const router = express.Router();
const UserModel = require("../../models/model");

router.post("/", (req, res) => {
	res.send({ message: req.body.username });
});

module.exports = router;
