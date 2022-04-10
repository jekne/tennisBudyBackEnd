"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    static associate(models) {
      story.belongsTo(models.user);
    }
  }
  story.init(
    {
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
