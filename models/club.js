"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class club extends Model {
    static associate(models) {}
  }
  club.init(
    {
      name: DataTypes.STRING,
      webSite: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
      adress: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      rateClub: DataTypes.INTEGER,

      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "club",
    }
  );
  return club;
};
