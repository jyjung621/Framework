'use strict';
module.exports = (sequelize, DataTypes) => {
  const USERS = sequelize.define('USERS', {
    userId: DataTypes.STRING,
    name: DataTypes.STRING,
    engName: DataTypes.STRING
  }, {});
  USERS.associate = function(models) {
    // associations can be defined here
  };
  return USERS;
};