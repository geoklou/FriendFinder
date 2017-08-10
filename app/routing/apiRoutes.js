
// var path = require("path");

//load data from friends
var friendsData = require("../data/friends");

//export module 
module.exports = function(app) {
// Get all friends
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

};