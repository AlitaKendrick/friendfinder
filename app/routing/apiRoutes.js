// Dependencies
var friends = require('../data/friends');

// Export the function
module.exports = function(app) {

    // Sets the get for the api/friends route
    app.get('/api/friends', function(req, res) {
        res.json(friends);

    });
  }

    // Set the post for the api/friends route
    app.post('/api/friends', function(req, res) {
      res.json(friends);

//         //create a function to compare scores 
//         // For-each loop to go through the data in friends.js to find a match
       
});
