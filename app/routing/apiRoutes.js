var path = require('path');

// Import the list of friend entries
var friend = require('../data/friend.js');

// Export API routes
module.exports = function (app) {
   // console.log('___ENTER apiRoutes.js___');

   // Total list of friend entries
   app.get('/api/friend', function (req, res) {
       res.json(friend);
   });

   // Add new friend entry
   app.post('/api/friend', function (req, res) {
       // Capture the user input object
       var userInput = req.body;
       // console.log('userInput = ' + JSON.stringify(userInput));

       var userResponses = userInput.scores;
       // console.log('userResponses = ' + userResponses);

       // Compute best friend match
       var matchName = '';
       var matchImage = '';
       var totalDifference = 10000; // Make the initial value big for comparison

       // Examine all existing friends in the list
       for (var i = 0; i < friend.length; i++) {
           // console.log('friend = ' + JSON.stringify(friends[i]));

           // Compute differenes for each question
           var diff = 0;
           for (var j = 0; j < userResponses.length; j++) {
               diff += Math.abs(friend[i].scores[j] - userResponses[j]);
           }
           // console.log('diff = ' + diff);

           // If lowest difference, record the friend match
           if (diff < totalDifference) {
               // console.log('Closest match found = ' + diff);
               // console.log('Friend name = ' + friends[i].name);
               // console.log('Friend image = ' + friends[i].photo);

               totalDifference = diff;
               matchName = friend[i].name;
               matchImage = friend[i].photo;
           }
       }

       // Add new user
       friend.push(userInput);

       // Send appropriate response
      res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
   });
  };