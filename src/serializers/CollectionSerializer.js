import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';

class CollectionSerializer extends Serializer {
  constructor(resource, serializerType, request = null) {
    super(resource, request);
    this.serializerType = serializerType;
  }

  serialize() {
    return {
      data: this.collect(),
      links: this.links(),
    };
  }

  collect() {
    return this.resource.map((item) => {
      const serializer = new this.serializerType(item);
      return serializer.serialize().data;
    });
  }

  links() {
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: `${process.env.API_URL}` };
  }
}
export default CollectionSerializer;
