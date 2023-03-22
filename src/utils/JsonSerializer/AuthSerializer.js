class AuthSerializer {
  registration(data, links) {
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

  login(data, links) {
    return {
      data: {
        type: 'Token',
        token: data.token,
        id: data.user.id,
        attributes: {
          ...data.user,
        },
      },
      links: {
        self: links,
      },
    };
  }
}
export default new AuthSerializer();
