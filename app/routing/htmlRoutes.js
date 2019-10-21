// Set up Dependencies
const path = require("path");

// Routing logic
module.exports = function(app) {
  // Route to go to the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default route to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};