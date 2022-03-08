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
      // this.belongsTo(models.match, {
      //   foreignKey: "matchId",
      // });
      // define association here
    }
  }
  set.init(
    {
      matchId: DataTypes.INTEGER,
      set: DataTypes.INTEGER,
      // userId: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "set",
    }
  );
  return set;
};
