const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const path = require("path");
const validator = require("validator");
const UserModel = require("../../models/model");

const router = express.Router();

router.post("/logout", (req, res, next) => {
  try {
    res.clearCookie("jwt", { path: "/" });
    res.status(200).send();
  } catch (err) {
    res.status(400).send();
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate(
    "login",
    { session: false },
    async (err, user, info) => {
      if (err || !user) {
        res.status(400).json({ message: err });
        return next(err);
      }

      const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
      };

      // generate a signed json web token
      const token = jwt.sign(JSON.stringify(payload), process.env.CRYPTKEY);

      // assign the jwt to an html only cookie
      res.cookie("jwt", token, {
        signed: true,
        httpOnly: true,
        maxAge: 1000000000
        // secure: true
      });
      res.status(200).json({ username: user.username });
    }
  )(req, res, next);
});

router.post("/register", async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  try {
    let errors = [];
    if (
      !validator.isAlphanumeric(username) ||
      !validator.isAlphanumeric(username[0])
    ) {
      errors.push({
        message:
          "username must contain only letters or numbers and first letter must not be a number"
      });
    }
    if (!validator.isLength(username, { min: 3, max: 21 })) {
      errors.push({
        message: "Username must be between 3 and 20 characters"
      });
    }
    if (!validator.isEmail(email)) {
      errors.push({ message: "Invalid Email" });
    }
    if (!validator.isAlphanumeric(password)) {
      errors.push({ message: "Password must be numbers or letters" });
    }
    if (!validator.isLength(password, { min: 6, max: 21 })) {
      errors.push({
        message: "Password must be between 6 and 20 characters"
      });
    }

    const user_Name = await UserModel.findOne({ username });
    if (user_Name) {
      errors.push({ message: "Account with this username already exists" });
    }

    const user_Email = await UserModel.findOne({ email });
    if (user_Email) {
      errors.push({ message: "Account with this email already exists" });
    }

    if (errors.length > 0) throw errors;

    const user = await UserModel.create({ username, email, password });
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = router;
