import dotenv from 'dotenv';

dotenv.config();
class Serializer {
  constructor(resource, request = null) {
    this.resource = resource;
    this.request = request;
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

  type() {
    throw new Error('Undefined');
  }

  id() {
    return `${this.resource.id}` || '';
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
