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
}
export default PrimitiveSerializer;
