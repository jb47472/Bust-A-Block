module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    title: DataTypes.STRING,
   genre: DataTypes.STRING,
  }, {
    timestamps: false
  });
  return Movie;
};
