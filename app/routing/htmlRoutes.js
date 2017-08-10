
var path = require("path");

//export module 
module.exports = function(app) {

//route to survey page
app.get('/survey', function (req, res) {
  res.send('Survey Form');
    })

//go to homepage
app.use(function(req, res) {
  res.send('Friend Finder Hone');
});

}


