import Serializer from './Serializer.js';

class DialogSerializer extends Serializer {
  type() {
    return 'Dialog';
  }

  attributes() {
    return {
      name: this.resource.name,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/dialog/${this.resource.id}` };
  }
}
export default DialogSerializer;
