// Dependencies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Tells node that we are creating an express server
var app = express();

// Sets an initial port
var port = process.env.PORT || 3000;

// Syncing for our models
var db = require("./models");

// // Router
var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + "/public"));

// Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// Override with POST having ?_method=DELETE
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Starts the server to begin listening with sequelize.sync
db.sequelize.sync({}).then(function() {
	app.listen(PORT, function() {
		console.log("listening on " + PORT);	
	});
});
