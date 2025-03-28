const express = require("express"); 
const route = express.Router();
const path = require("path");


route.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subview", "index.html"))
})




module.exports = route;  