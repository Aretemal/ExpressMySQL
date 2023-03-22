class UserSerializer {
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
        id: data.userAuth.id,
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
        id: data.id,
        attributes: {
          status: data.status,
        },
      },
      links: {
        self: links,
      },
    };
  }
}
export default new UserSerializer();
