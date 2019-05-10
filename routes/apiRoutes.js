var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/contacts", function(req, res) {
    db.Movies.findAll({}).then(function(contacts_db) {
      res.json(contacts_db);
    });
  });
  



  // Create a new contact to MySQL
  app.post("/api/contacts", function(req, res) {
    db.Contact.create(req.body).then(function(contacts_db) {
      res.json(contacts_db);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
