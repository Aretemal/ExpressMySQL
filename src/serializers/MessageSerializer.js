import Serializer from './Serializer.js';
import UserSerializer from './UserSerializer.js';

class MessageSerializer extends Serializer {
  constructor(resource, request = null, relationships = null) {
    super(resource, request);
    this.relationships = relationships;
  }

  type() {
    return 'Message';
  }

  serialize() {
    const data = {
      data: {
        attributes: this.attributes(),
        type: this.type(),
        id: this.id(),
        links: this.links(),
      },
    };
    if (this.relationships) {
      data.data.relationships = this.relationshipsCreator();
      data.data.included = this.included();
    }
    return data;
  }

  relationshipsCreator() {
    const serializer = new UserSerializer(this.relationships);
    return {
      user: {
        links: `${process.env.API_URL}/user/${this.relationships.id}`,
        data: {
          id: serializer.serialize().data.id,
          type: serializer.serialize().data.type,
        },
      },
    };
  }

  included() {
    const serializer = new UserSerializer(this.relationships);
    const { id, type, attributes } = serializer.serialize().data;
    return { id, type, attributes };
  }

  attributes() {
    return {
      senderId: this.resource.senderId,
      recipientId: this.resource.recipientId,
      message: this.resource.message,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/dialog/message/${this.resource.id}` };
  }
}
export default MessageSerializer;
