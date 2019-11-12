const express = require("express");
const router = express.Router();
const UserModel = require("../../models/model");

router.get("/profile", async (req, res) => {
  const user = await UserModel.findOne({ username: req.query.username });
  if (user) {
    res.status(200).send({ message: user });
  } else {
    res.status(400).send();
  }
});

module.exports = router;
