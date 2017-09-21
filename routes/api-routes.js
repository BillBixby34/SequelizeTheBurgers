var db = require("../models");

module.exports = function(app){
//adding shop values
app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        var hbsObject = {
            burgers: dbBurger
        };
        console.log(hbsObject); //doesn't show in console
        res.render("index", hbsObject);
        //res.json(dbShop);
    });
});
//route for creating shop stuff
app.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name //, 
    }).then(function(dbBurger) {
        res.redirect("/");
    });
});
//PUT route for 'buying' items from shop
app.put("/:id", function(req, res) {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbShop) {
        res.redirect("/");
    });
});
//DELETE by something other than id?Maybe shop item#?
app.delete("/:id", function(req, res) {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbShop) {
        res.redirect("/");
    });
});

};