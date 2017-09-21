//server has constants(using var) and apps
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//check app.set(...) listen does not work

require("./routes/api-routes.js")(app);
db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});
