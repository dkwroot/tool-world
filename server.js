const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();
require("./auth/auth");

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookies Middleware
app.use(cookieParser(process.env.CRYPTKEY));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to mongoDB..."))
  .catch(error => console.log(error));

// Use Routes
app.use("/", require("./routes/api/public"));
app.use(
  "/secure",
  passport.authenticate("jwt", { session: false }),
  require("./routes/api/secure")
);
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
