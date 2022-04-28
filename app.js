// DEPENDENCIES
const express = require("express");
const groupsController = require("./controllers/groupsController.js")
const cors = require("cors");
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Study Buddies!");
});

//anything that starts with products use groupsController file....

app.use("/groups", groupsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
