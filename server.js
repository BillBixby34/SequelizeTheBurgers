//server has constants(using var) and apps
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

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

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
//change to app.listen(port) => no errors
//app.listen(app.get('port'),() => console.log("Listening on PORT " + port))gives errors
app.listen(port);