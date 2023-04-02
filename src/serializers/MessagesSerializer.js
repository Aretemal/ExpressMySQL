import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';
import MessageSerializer from './MessageSerializer.js';

class MessagesSerializer extends Serializer {
  serialize() {
    return {
      data: this.users(),
      links: this.links(),
    };
  }

  users() {
    return this.resource.map((message) => {
      const serializer = new MessageSerializer(message);
      return serializer.serialize().data;
    });
  }

  links() {
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: `${process.env.API_URL}/dialog/message` };
  }
}
export default MessagesSerializer;
