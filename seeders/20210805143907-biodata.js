'use strict';


const fs = require('fs')
const biodata = JSON.parse(fs.readFileSync('./seed_data/biodata.json'))
console.log(biodata)
biodata.map((e) => {
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
        await queryInterface.bulkInsert('Biodata', biodata, {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkInsert('Biodata', biodata, {});
    }
};