//IMPORTING DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//THIS IS ALL EXPRESS CONFIG STUFF, HOW DO I USE IT?  EXPRESS MAKES ROUTING EASY IN NODE.JS
var app = express();
var PORT = process.env.PORT || 8080;   //8080 is local, will need process.env.port when deploying to heroku

// PARSE APPLICATION/X-WWW-FORM-URLENCODED- ALLOWS INFO BACK IN JSON FORM SO IT'S EASY TO MANIPULATE
app.use(bodyParser.urlencoded({ extended: true }));
 
// PARSE APPLICATION/JSON
app.use(bodyParser.json());

// PARSE INFO/TEXT
app.use(bodyParser.text());
app.use(express.static("app/public"));
 
//INCLUDE (requiring) HTML ROUTES ON SERVER FILE AND THE (APP) THAT WE ARE PASSING IN TO THAT SPECIFIC FUNCTION WE WANT TO USE EXPRESS
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

//THIS CONSOLE.LOG SHOWS UP IN NODE, HOW IS THAT?
app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT);
});









//IMPORTING DEPENDENCIES
// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');

// //THIS IS ALL EXPRESS CONFIG STUFF, HOW DO I USE IT?  EXPRESS MAKES ROUTING EASY IN NODE.JS
// var app = express()
// var PORT = process.env.PORT || 8080;
// // app.get('/', function (req, res) {
// //        res.send('Hello World')  //SHOWS UP ON BROWSER, BUT DON'T WANT TO SHOW THIS
// // })


// // PARSE APPLIATION/X-WWW-FORM-URLENCODED- ALLOWS INFO BACK IN JSON FORM SO IT'S EASY TO MANIPULATE
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // PARSE APPLICATION/JSON
// app.use(bodyParser.json())
 
// // app.use(function (req, res) {
// //   res.setHeader('Content-Type', 'text/plain')  //SETTING A HEADER
// //   res.write('you posted:\n')                    //ASKING US TO WRITE WHAT WE ARE POSTING
// //   res.end(JSON.stringify(req.body, null, 2))    //AND ASSUMING THERE IS A REQUEST GOING ON WITH THE JSON.STRING AND BASICALLY IT'S SAYING YOU DIDN'T POST ANYTTHING WHEN YOU WENT TO THE URL
// // })

// //INCLUDE HTML ROUTES ON SERVER FILE AND THE (APP) THAT WE ARE PASSING IN TO THAT SPECIFIC FUNCTION WE WANT TO USE EXPRESS
// require('./app/routing/html-routes.js')(app);

// // RETURNS: 'MYFILE.HTML'                           NECESSARY?
// //path.basename('C:\\temp\\myfile.html');

// //THIS CONSOLE.LOG SHOWS UP IN NODE, HOW IS THAT SO?
// app.listen(PORT, function(){
//     console.log("app listening on PORT: " + PORT);
// });

// //IS THIS THE SAME AS VAR PATH?
// //const path = require('path');

// //SETS UP THE EXPRESS APP TO HANDLE DATA PARSING ***
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());


// // // REQUIRE/IMPORT THE HTTP MODULE
// // var http = require("http");

// // // Define a port to listen for incoming requests
// // //var PORT = 8080;

// // // Create a function to handle requests and responses
// // function handleRequest(request, response) {
// //     //saving the request data as a variable
// //     var requestData = "";
// //     //when the server receives data
// //     req.on("data", function(data) {       //data if referring to..? and when i added lines 10-15 browser stopped working
// //         //add it to the requestData
// //         requestData += data;
// //     });
// //   // Send the below string to the client when the user visits the PORT URL
// //   //response.end("It Works!! Path Hit: " + request.url);
// // }

// // // Use the Node HTTP package to create our server.
// // // Pass the handleRequest function to empower it with functionality.
// // var server = http.createServer(handleRequest);

// // // Start our server so that it can begin listening to client requests.
// // server.listen(PORT, function() {

// //   // Log (server-side) when our server has started
// //   console.log("Server listening on: http://localhost:" + PORT);
// // });


// // //create variables (array of objects) for holding the questions/answers.
// // var userData = {
// //     name:$("#name").val();
// //     photo:$("#photo").val();
// //     scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
// // }