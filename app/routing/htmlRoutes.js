//THESE ROUTES ARE TO HELP DIRECT THE USER. WHEN THEY CLICK ON A LINK THE ROUTER WILL UNDERSTAND BASED 
//ON INFO IN THIS FILE WHAT PAGE TO DELIVER TO THEM.
//API ROUTES ARE FOR THE DATA. IT DETERMINES WHAT DATA THE USER SEES AS WELL AS WHAT DATA THE USER IS 
//ABLE TO POST TO THE SERVER TO STORE.

//REQUIRE PATH
var path = require('path');

module.exports = function (app) {
// Basic route that sends the user first to the AJAX Page
    app.get('/', function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
         res.sendFile(path.join(__dirname, '../public/home.html'));  
         console.log("blay!");
    });

    app.get('/survey', function(req, res) {
         res.sendFile(path.join(__dirname, '../public/survey.html'));
         console.log("play");
    });
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/home.html'));
      console.log("play2");
 });
    // app.use( function(req, res) {
    //     res.sendFile(path.join(__dirname, '/../public/home.html'));
    // });
} 

//NOW GOING TO USE THE ROUTES TO THE DIRECT USER IN HTML - GO TO HOME.HTML PAGE