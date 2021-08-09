'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        static associate(models) {
            // define association here
            History.hasMany(models.Biodata, {
                foreignKey: 'HistoryId',
                onDelete: 'SET NULL'
            })
        }
    };
    History.init({
        historyScore: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};