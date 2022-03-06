"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set.init(
    {
      match: DataTypes.INTEGER,
      set: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "set",
    }
  );
  return set;
};