'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Biodata', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            HistoryId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'Histories',
                    key: 'id'
                }
            },
            UserId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'Users',
                    key: 'id'
                }
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Biodata');
    }
};