// Set up Dependencies
var friendsData = require("../data/friends");

// Routing logic
module.exports = function(app) {
  // API GET request to return Friends data as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST request to add submitted user data to server as an object
  app.post("/api/tables", function(req, res) {
      friendsData.push(req.body);
      // res.json();
  });
};