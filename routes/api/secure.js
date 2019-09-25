const express = require("express");
const router = express.Router();
const UserModel = require("../../models/model");

router.post("/", async (req, res) => {
	const user = await UserModel.findOne({ username: req.body.username });
	res.send({ message: user });
});

module.exports = router;
