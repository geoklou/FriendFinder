
//load data from original api friends
var friendsData = require("../data/friends");
//load data from spawn api match
var matchData = require("../data/match");
//export module 

module.exports = function(app) {

//Get all friends
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
  // console.log(friendsData);
});

//get match
app.get("/api/match", function(req, res) {
  res.json(matchData);
  // console.log(matchata);
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  //check new user info
  console.log("New user: " + newFriend.name + " Photo link: " + newFriend.photo + " Scores: " + newFriend.scores);

  //convert user's scores to numbers
  var newFriendNumbers = newFriend.scores.map(Number);
  console.log("Converted numbers from new friend: " + newFriendNumbers); //working

  var diff;
  
    for (var i = 0; i < friendsData.length; i++){ 
      for (var j = 0; j < friendsData[i].scores.length ; j++){
        //convert differences to absoluet values
        diff = Math.abs(friendsData[i].scores[j] - newFriendNumbers[j]); 
      }
          //criterion for match
          if (diff <= 1) {
          //confirm match
          console.log("diff<1 =  " + friendsData[i].name);
          //push match into new array matchData
          matchData.push(friendsData[i]);
          //check new array
          console.log(matchData);
        
      }//for j loop ends

      }//for  loop ends

      //push new friend to friendsData after it's been used to compute score difference 
      //so it was not included in friendsData when computing
      friendsData.push(newFriend);

      //send data to front end survey.html, removing seed index 0
      res.send(matchData.splice(0, 1));
});

};
