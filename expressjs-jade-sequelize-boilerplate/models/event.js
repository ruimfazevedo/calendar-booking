"use strict";

module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: DataTypes.STRING,
        startTime: DataTypes.DATE(),
        endTime: DataTypes.DATE(),
        vacancies: DataTypes.INTEGER,
        userLimit: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                Event.belongsTo(models.EventParent)
            }
        }
    });

    return Event;
};
