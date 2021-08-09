'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Biodata extends Model {
        static associate(models) {
            // define association here
            Biodata.belongsTo(models.History, {
                foreignKey: 'HistoryId',
                onDelete: 'SET NULL'
            })

            Biodata.belongsTo(models.User, {
                foreignKey: 'UserId',
                onDelete: 'SET NULL'
            })


        }
    };
    Biodata.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Biodata',
    });
    return Biodata;
};