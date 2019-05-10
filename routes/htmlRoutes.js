var db = require("../models");

var path = require("path");


module.exports = function(app) {
  // Load home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // load contact.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // load survery.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
