// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express App
var app = express();
var PORT = process.env.PORT||3000;

//Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//set up routing to public html pages
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listerner - start Express server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});