class Serializer {
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
      links: this.link(),
    };
  }

  type() {
    return this.resource.type;
  }

  id() {
    return this.resource.id || 0;
  }

  attributes() {
    return {
      ...this.resource.attributes,
    };
  }

  link() {
    return {
      self: this.resource.link,
    };
  }
}
export default Serializer;
