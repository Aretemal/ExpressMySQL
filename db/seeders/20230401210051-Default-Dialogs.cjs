/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Dialogs', [
      {
        senderId: 1,
        recipientId: 2,
        message: 'Hello user2',
      }, {
        senderId: 1,
        recipientId: 2,
        message: 'I am user1',
      },
      {
        senderId: 2,
        recipientId: 1,
        message: 'Hello user1',
      }, {
        senderId: 2,
        recipientId: 1,
        message: 'How are you',
      }, {
        senderId: 1,
        recipientId: 3,
        message: 'Hi',
      }, {
        senderId: 4,
        recipientId: 1,
        message: 'Hello user',
      }, {
        senderId: 4,
        recipientId: 5,
        message: 'Hello user',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Dialogs', null);
  },
};
