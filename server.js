require("dotenv").config();
//Require database file functionality
require("./config/database");
const cors = require("cors");

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
//
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
//Set up to access faviocon name icon
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require("./config/checktoken"));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  // renders the html file
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
