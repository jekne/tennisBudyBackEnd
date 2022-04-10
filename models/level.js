"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class level extends Model {
    static associate(models) {
      level.hasMany(models.user);
    }
  }
  level.init(
    {
      levelRateFixed: DataTypes.STRING,
      description: DataTypes.TEXT,
      checkLevel: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "level",
    }
  );
  return level;
};
