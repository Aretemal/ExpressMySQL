import dotenv from 'dotenv';

dotenv.config();
class Serializer {
  constructor(resource, options = {}) {
    this.resource = resource;
    const keysArray = Object.keys(options);
    keysArray.forEach((key) => {
      this[key] = options[key];
    });
  }

  serialize() {
    return {
      data: {
        type: this.type(),
        id: this.id(),
        attributes: this.attributes(),
        links: this.links(),
      },
    };
  }

  createRelationUnit() {
    return {
      data: {
        type: this.type(),
        id: this.id(),
      },
      links: this.links(),
    };
  }

  type() {
    return '';
  }

  id() {
    return `${this.resource.id}`;
  }

  attributes() {
    return {
      ...this.resource,
    };
  }

  links() {
    return { self: process.env.API_URL };
  }
}
export default Serializer;
