module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    subject: DataTypes.STRING,
   message: DataTypes.STRING
  });
  return Contact;
};
