// Pull in dependencies
var path = require("path");

// Displays all characters
var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    console.log("working"); 
    res.json(friends);
  });
  
  // Displays a single character, or returns false  
  app.post("/api/friends", function(req, res) {
    
      var modalMatch = {
      name: "",
      photo: "",
      numberDiff: 1000
    };
    
    var userData   = req.body;
    var userName   = userData.name;
    var userPhoto  = userData.photo;
    var userScores = userData.scores;

    var totalDifference = 0;

    
    
    //   LOOP THROUGH FRIEND POSSIBILITIES IN DATABASE
      for (var i = 0; i < friends.length; i++) {
          console.log(friends[i].name);
          total = 0;
       //return res.json(friends[i]);
      
      for (var x = 0; x < friends[i].scores[x]; x++){
        totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));
        if (totalDifference <= modalMatch.numberDiff){
          modalMatch.name = friends[i].name;
          modalMatch.photo = friends[i].photo;
          modalMatch.numberDiff = totalDifference;
          console.log("yay!");
        }
      }

    }  
        friends.push(userData);
     res.json(modalMatch);

  }   
  )};
  