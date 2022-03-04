"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class matche extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  matche.init(
    {
      playerOneId: DataTypes.INTEGER,
      playerTwoId: DataTypes.INTEGER,
      winnerId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "matche",
    }
  );
  return matche;
};
