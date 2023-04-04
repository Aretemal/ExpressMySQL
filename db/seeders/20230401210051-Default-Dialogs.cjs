/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Dialogs', [
      {
        id: 1,
        senderId: 1,
        recipientId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 2,
        senderId: 2,
        recipientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 3,
        senderId: 1,
        recipientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 4,
        senderId: 4,
        recipientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 5,
        senderId: 4,
        recipientId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Dialogs', null);
  },
};
