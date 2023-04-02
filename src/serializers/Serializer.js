import dotenv from 'dotenv';
import fullUrlCreator from '../utils/fullUrlCreator.js';

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
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: process.env.API_URL };
  }
}
export default Serializer;
