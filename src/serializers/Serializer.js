import fullUrlCreator from '../utils/fullUrlCreator.js';

class Serializer {
  constructor(resource, request = null) {
    this.resource = resource;
    this.request = request;
  }

  serialize() {
    return {
      data: [{
        type: this.type(),
        id: this.id(),
        attributes: this.attributes(),
      }],
      links: this.link(),
    };
  }

  type() {
    return this.resource.type;
  }

  id() {
    return this.resource.id || '0';
  }

  attributes() {
    return {
      ...this.resource.attributes,
    };
  }

  link() {
    return {
      self: !this.request ? '1' : fullUrlCreator(this.request),
    };
  }
}
export default Serializer;
