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
     var userData = req.body;
     var userResp = userData.scores;
     var matchName = '';
     var matchImage = '';
     var totalDifference = 1000; 
    
    // var modalMatch = {
    //   name: "",
    //   photo: "",
    //   numberDiff: 1000
    // };
    
    // var userData   = req.body;
    // var userName   = userData.name;
    // var userPhoto  = userData.photo;
    // var userScores = userData.scores;

    // var totalDifference = 0;

    
    for (var i = 0; i< friends.length; i++) {
      var diff = 0;
      console.log(friends[i].name)
      for (var x = 0; x < userResp.length; x++) {
        diff += Math.abs(friends[i].scores[x] - userResp[x]);
      }

      if (diff < totalDifference) {
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }
    //   LOOP THROUGH FRIEND POSSIBILITIES IN DATABASE
    //   for (var i = 0; i < friends.length; i++) {
    //       console.log(friends[i].name);
    //       total = 0;
    //    //return res.json(friends[i]);
      
    //   for (var x = 0; x < friends[i].scores[x]; x++){
    //     totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));
    //     if (totalDifference <= modalMatch.numberDiff){
    //       modalMatch.name = friends[i].name;
    //       modalMatch.photo = friends[i].photo;
    //       modalMatch.numberDiff = totalDifference;
    //       console.log("yay!");
    //     }
    //   }

    // }  
        friends.push(userData);
     res.json({status: "OK", matchName, matchImage: matchImage});

  }   
  )};
  