/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Messages', [
      {
        dialogId: 1,
        message: 'Hello user 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 2,
        message: 'Hello user 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 1,
        message: 'Hello1 user 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 3,
        message: 'I am user',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 4,
        message: 'I am u1er',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 5,
        message: 'I am u12ser',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Messages', null);
  },
};
