
// var path = require("path");

//load data from friends
var friendsData = require("../data/friends");

//export module 
module.exports = function(app) {
// Get all friends
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  // console.log("object: " + newFriend);
  console.log("New user: " + newFriend.name + " Photo link: " + newFriend.photo + " Scores: " + newFriend.scores);
  
  res.send(newFriend);
  // friendsData.push(newFriend);
  //convert user's score to numbers
  var newFriendNumbers = newFriend.scores.map(Number);
  console.log("Converted numbers: " + newFriendNumbers);

  for (var i = 0; i<friendsData.length; i++){

    var num1 = newFriendNumbers[0];
    console.log(num1);
    //test find number location with same scores as seed user
    var num2 = friendsData[0].scores[0];
    console.log(num2);
    // if(parseInt(newFriend.scores[i])-(parseInt(friendsData.scores[i]) <= 1))
      if(num1 - num2 === 0)
      {
      console.log("Congratulations! " + newFriend.name + ": you are compatible with " + friendsData[i].name);
    }
      else 
        console.log('Sorry, no compatible friends found.');
  }
  //after comparison, push newFriend into array
  friendsData.push(newFriend);

});

}
