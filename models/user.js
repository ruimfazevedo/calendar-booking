"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        alias: DataTypes.STRING,
        password: DataTypes.STRING
    });

    return User;
};
