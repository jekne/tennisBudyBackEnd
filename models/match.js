"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.user, {
        through: "userMatches",
        foreignKey: "userId",
      });
      this.hasMany(models.set, {
        foreignKey: "matchId",
      });
      // define association here
    }
  }
  match.init(
    {
      winnerId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "match",
    }
  );
  return match;
};
