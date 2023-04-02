import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';

class MessageSerializer extends Serializer {
  type() {
    return 'Message';
  }

  attributes() {
    return {
      senderId: this.resource.senderId,
      recipientId: this.resource.recipientId,
      message: this.resource.message,
    };
  }

  links() {
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: `${process.env.API_URL}/dialog/message/${this.resource.id}` };
  }
}
export default MessageSerializer;
