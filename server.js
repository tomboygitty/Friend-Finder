// Set up Dependencies
const express = require("express");

// Set up the Express App
var app = express();
var PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8080;
}

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Server starts listening for requests
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});