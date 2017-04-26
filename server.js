var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
var port = 4200;

var friends = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vdn.api+json"}));


app.listen(port, function(){
	console.log("listening on port " + port);
}); 


app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// app.get("/api/friends", function(request, response) {
//   console.log("hello");
// });

app.get("/api/friends", function(request, response) {
	return response.json(friends);
});

app.post("/api/friends", function(request, response){
	var newfriend = request.body;
	// console.log(newReservation);
	friends.push(newfriend);

     fs.writeFile('/app/data/friends.js', newfriend, 'utf8', 'callback');

	console.log(friends);
});

