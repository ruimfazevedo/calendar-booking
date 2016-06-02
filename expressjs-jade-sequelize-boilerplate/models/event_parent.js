"use strict";

module.exports = function(sequelize, DataTypes) {
    var EventParent = sequelize.define("EventParent", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: DataTypes.STRING,
        weekday: DataTypes.INTEGER(1),
        startDate: DataTypes.DATEONLY,
        endDate: DataTypes.DATEONLY,
        startTime: DataTypes.TIME(),
        endTime: DataTypes.TIME(),
        repeats: DataTypes.INTEGER(1),
        repeatFreq: DataTypes.INTEGER(1)
    }, {
        classMethods: {
            associate: function(models) {
                EventParent.hasMany(models.Event)
            }
        }
    });

    return EventParent;
};
