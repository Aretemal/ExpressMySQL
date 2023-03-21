class UserJsonCreator {
  getOne(data, links) {
    return {
      data: {
        type: 'ObjectUser',
        id: data.id,
        attributes: {
          ...data,
        },
      },
      links: {
        self: links,
      },
    };
  }

  getAllUsers(data, links) {
    return {
      data: {
        type: 'Array Users',
        id: -1,
        attributes: {
          ...data,
        },
      },
      links: {
        self: links,
      },
    };
  }

  getStatus(data, links) {
    return {
      data: {
        type: 'Status',
        id: -1,
        attributes: {
          ...data,
        },
      },
      links: {
        self: links,
      },
    };
  }
}
export default new UserJsonCreator();
