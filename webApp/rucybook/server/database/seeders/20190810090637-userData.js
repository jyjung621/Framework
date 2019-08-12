'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userId: 'test_A',
      name: 'Tester_A',
      engName: 'ttt_A',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 'test_B',
      name: 'Tester_B',
      engName: 'ttt_B',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 'test_C',
      name: 'Tester_C',
      engName: 'ttt_C',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
