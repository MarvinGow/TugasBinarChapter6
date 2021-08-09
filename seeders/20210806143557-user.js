'use strict';

const fs = require('fs')
const user = JSON.parse(fs.readFileSync('./seed_data/user.json'))
console.log(user)
user.map((e) => {
    e.createdAt = new Date()
    e.updatedAt = new Date()
})

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Users', user, {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkInsert('Users', user, {});
    }
};