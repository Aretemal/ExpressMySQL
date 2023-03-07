/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        userId: 1,
        firstName: 'user1',
        lastName: 'user1',
        password: '$2a$07$hCU37iEF8OL8KNSyvz5GpOciX24ehvrzi1lUNegCjO0p.kHrG.fFu',
        email: 'user1',
        login: 'user1',
      },
      {
        userId: 2,
        login: "user2",
        password: "$2a$07$bTiD62b8eDfBmgvCNLwQzuRV7mwO8J.tppj3DUh6DYUzWcU1Vawqe",
        firstName: "user2",
        lastName: "user2",
        email: "user2"
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null);
  },
};
