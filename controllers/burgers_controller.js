//import express and burgers.js
var express = require("express");
var burger = require("../models/burger.js");

// check express.Router in express docs
var router = express.Router();
// Create all our routes and set up logic within those routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name], function() {
    res.redirect("/");
  });
});

//probably not searching by id...
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  //determines condition  by id
  console.log("condition", condition);
//but 
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

//router.delete("/:id", function(req, res) {
//  var condition = "id = " + req.params.id;

  //burger.delete(condition, function() {
    //res.redirect("/");
 // });
//});

// Export routes for server.js to use.
module.exports = router;
