class Serializers {
  constructor(resource, options = {}) {
    this.resource = resource;
    this.options = options;
  }

  serialize() {
    return {
      data: {
        type: this.type(),
        id: this.id(),
        attributes: this.attributes(),
      },
      links: {
        self: this.link(),
      },
    };
  }

  type() {
    throw new Error('Method is not defined');
  }

  id() {
    throw new Error('Method is not defined');
  }

  attributes() {
    throw new Error('Method is not defined');
  }

  link() {
    throw new Error('Method is not defined');
  }
}
export default Serializers;
