const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Database Configuration with Mongoose
if(process.env.NODE_ENV == 'production'){
  mongoose.connect('mongodb://heroku_0267gz13:ds70pbclnhms89ivfgv7fsiuhp@ds125195.mlab.com:25195/heroku_0267gz13');
}
else{
	mongoose.connect(
		process.env.MONGODB_URI || "mongodb://localhost/fitmatch",
		{
		  useMongoClient: true
		}
	);
}

var db = mongoose.connection;
// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

