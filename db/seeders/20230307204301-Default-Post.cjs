/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Posts', [
      {
        authorId: 1,
        content: 'Hello',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Posts', null);
  },
};
