import Serializer from './Serializer.js';

class PrimitiveSerializer extends Serializer {
  type() {
    return 'Primitive';
  }

  attributes() {
    return {
      primitive: this.resource.primitive,
    };
  }

  collectionSerializer() {
    return {
      type: this.type(),
      id: this.id(),
      attributes: this.attributes(),
    };
  }
}
export default PrimitiveSerializer;
