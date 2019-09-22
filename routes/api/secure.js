const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send({ message: "Private Message Successful, Yay!" });
});

module.exports = router;
