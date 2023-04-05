/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Messages', [
      {
        dialogId: 1,
        senderId: 1,
        message: 'Hello user 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 1,
        senderId: 2,
        message: 'Hello user 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 1,
        senderId: 2,
        message: 'Hello1 user 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 3,
        senderId: 3,
        message: 'I am user',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 4,
        senderId: 4,
        message: 'I am u1er',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        dialogId: 5,
        senderId: 5,
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
