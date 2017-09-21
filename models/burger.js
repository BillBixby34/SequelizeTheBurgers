// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//selects all burgers
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //creates a burger 
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //burger to devoured="true"
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }//add comma when uncomment ,
  //delete: function(condition, cb) {
    //orm.delete("burgers", condition, function(res) {
    //  cb(res);
    //});
  //}
};

module.exports = burger;