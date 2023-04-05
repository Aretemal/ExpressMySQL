/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('UserDialogs', [
      {
        id: 1,
        UserId: 1,
        DialogId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 2,
        UserId: 2,
        DialogId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 8,
        UserId: 3,
        DialogId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 3,
        UserId: 1,
        DialogId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 4,
        UserId: 4,
        DialogId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 5,
        UserId: 4,
        DialogId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 6,
        UserId: 3,
        DialogId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserDialog', null);
  },
};
