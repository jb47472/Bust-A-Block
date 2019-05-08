module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Contact;
};
