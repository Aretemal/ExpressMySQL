/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
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
        login: 'user2',
        password: '$2a$07$bTiD62b8eDfBmgvCNLwQzuRV7mwO8J.tppj3DUh6DYUzWcU1Vawqe',
        firstName: 'user2',
        lastName: 'user2',
        email: 'user2',
      }, {
        userId: 3,
        login: 'user3',
        password: '$2a$07$bTiD62b8eDfBmgvCNLwQzuRV7mwO8J.tppj3DUh6DYUzWcU1Vawqe',
        firstName: 'user3',
        lastName: 'user3',
        email: 'user3',
      }, {
        userId: 4,
        login: 'user4',
        password: '$2a$07$bTiD62b8eDfBmgvCNLwQzuRV7mwO8J.tppj3DUh6DYUzWcU1Vawqe',
        firstName: 'user4',
        lastName: 'user4',
        email: 'user4',
      }, {
        userId: 5,
        login: 'user5',
        password: '$2a$07$bTiD62b8eDfBmgvCNLwQzuRV7mwO8J.tppj3DUh6DYUzWcU1Vawqe',
        firstName: 'user5',
        lastName: 'user5',
        email: 'user5',
      }, {
        userId: 6,
        login: 'user6',
        password: '$2a$07$bTiD62b8eDfBmgvCNLwQzuRV7mwO8J.tppj3DUh6DYUzWcU1Vawqe',
        firstName: 'user6',
        lastName: 'user6',
        email: 'user6',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null);
  },
};
