import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';

class CollectionSerializer extends Serializer {
  constructor(resource, serializerType, request = null, metaData = null) {
    super(resource, request);
    this.serializerType = serializerType;
    this.metaData = metaData;
  }

  meta() {
    return this.metaData;
  }

  serialize() {
    const data = {
      data: this.collect(),
      links: this.links(),
    };
    if (this.metaData) {
      data.meta = this.meta();
    }
    return data;
  }

  collect() {
    return this.resource.map((item) => {
      const serializer = new this.serializerType(item);
      return serializer.serialize().data;
    });
  }

  links() {
    return { self: `${process.env.API_URL}/${this.request.originalUrl}` };
  }
}
export default CollectionSerializer;
