// Set up Dependencies
var friendsData = require("../data/friends");

// Routing logic
module.exports = function(app) {
  // API GET request to return Friends data as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST request to add submitted user data to server as an object
  app.post("/api/friends", function(req, res) {
      var scores = [];
      // Loop through the current Friends data array
      for (i = 0; i < friendsData.length; i++) {
          var tempScore = 0;
        // Loop through the scores for the current Friend being added via the Request.body
        for (j = 0; j < friendsData[i].scores.length; j++) {
          // Add up the absolute values of the differences in scores per question b/t new Friend being added and current Friend in data loop
          tempScore += Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
        }
        // Total difference in scores are logged to a new array so index positions for Friend data and score are matched
        scores.push(tempScore);
      }
      // Validate score values as numbers, not strings, before posting
      for (z = 0; z < req.body.scores.length; z++) {
        req.body.scores[z] = parseInt(req.body.scores[z]);
      }
      // Add the new Friend data to the array
      friendsData.push(req.body);
      // Find the lowest score difference from the comparisons
      var lowestScore = Math.min.apply(Math, scores);
      // Find the index of said lowest score
      var indexLowest = scores.indexOf(lowestScore);
      // Respond to the POST request with the Friend that matches closest
      res.json(friendsData[indexLowest]);
      console.log("New Friend data posted and closest match returned");
  });
};