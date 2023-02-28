'use strict';

/** @type {import('sequelize-cli').Migration} */
export const a = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Follows', 'id');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Follows', 'id', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }});
  }
};
