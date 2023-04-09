import Serializer from './Serializer.js';
import UserSerializer from './UserSerializer.js';

class CollectionSerializer extends Serializer {
  constructor(resource, serializerType, request = null, metaData = null, relationships = null) {
    super(resource, request);
    this.serializerType = serializerType;
    this.metaData = metaData;
    this.relationships = relationships;
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
      if (this.relationships) {
        const user = this.relationships.find((user) => item.senderId === user.id);
        const serializer = new this.serializerType(
          item,
          null,
          user,
        );
        return serializer.serialize().data;
      }
      const serializer = new this.serializerType(item);
      return serializer.serialize().data;
    });
  }

  links() {
    return { self: `${process.env.API_URL}/${this.request.originalUrl}` };
  }
}
export default CollectionSerializer;
