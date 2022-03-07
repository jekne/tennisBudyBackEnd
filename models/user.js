"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.match, {
        through: "userMatches",
        foreignKey: "userId",
      });
      // this.belongsToMany(models.set, {
      //   through: "set",
      //   foreignKey: "userId",
      // });
      // user.hasMany(models.location);
      // user.hasOne(models.level);
      // define association here
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        // unique: true,
        // allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.BOOLEAN,
      },

      age: {
        type: DataTypes.INTEGER,
      },
      telephone: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      levelId: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
