'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('USERs', [{
      userId: 'test_A',
      name: 'rucy_A',
      engNAme: 'engRucy_A',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 'test_B',
      name: 'rucy_B',
      engNAme: 'engRucy_B',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 'test_C',
      name: 'rucy_C',
      engNAme: 'engRucy_C',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('USERs', null, {})
  }
};
