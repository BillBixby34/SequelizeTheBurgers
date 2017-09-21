//Import (require) `connection.js` into `orm.js`
var connection = require("./connection.js");
// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
insertOne: function(table, cols, vals, cb) {
	var queryString = "INSERT INTO " + table;

  queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    //check connection.query... to cb(result)
    connection.query(queryString, vals, function(err, result) {
      if (err) {
       throw err;
     }

      cb(result);
    });
},
	//objColVals will be {burger_name: cheese, devoured: false}
	updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
//* `selectAll()` 
//   * `insertOne()` 
// * `updateOne()` 

module.exports = orm;