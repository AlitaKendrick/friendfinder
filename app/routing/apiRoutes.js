// Dependencies
var friends = require('../data/friends');


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var userScores = userData.scores;

    var match = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var totalDifference = 0;

//loop through friend options to find a match 
  for (var i = 0; i < friends.length; i++) {

      console.log(friends[i].name);
      totalDifference = 0;

      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= match.friendDifference) {

          match.name = friends[i].name;
          match.photo = friends[i].photo;
          match.friendDifference = totalDifference;
        }
      }
    }
    friends.push(userData);
    res.json(match);

  }); //close post route

}; //close module export 