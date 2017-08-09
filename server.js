// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up Express App
var app = express();
var PORT = 3000;

//Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//listerner - start Express server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});