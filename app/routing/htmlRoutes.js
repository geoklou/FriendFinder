
var path = require("path");

//export module 
module.exports = function(app) {

//route to survey page
app.get('/survey', function (req, res) {
  // res.send('Survey Form');
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })

//go to homepage
app.use(function(req, res) {
  // res.send('Friend Finder Hone');
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});

}


