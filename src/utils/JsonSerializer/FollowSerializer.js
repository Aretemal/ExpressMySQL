class FollowSerializer {
  follow(data, links) {
    return {
      data: {
        type: 'Follow connection',
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

  approve(data, links) {
    return {
      data: {
        type: 'Approve connection',
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

  unfollow(data, links) {
    return {
      data: {
        type: 'Unfollow connection',
        id: data.id || 0,
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
export default new FollowSerializer();
