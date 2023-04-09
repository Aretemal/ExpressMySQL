import { getClass } from '../utils/getClass.js';
import Serializer from './Serializer.js';

class MessageSerializer extends Serializer {
  type() {
    return 'Message';
  }

  serialize() {
    const data = {
      data: {
        id: this.id(),
        type: this.type(),
        attributes: this.attributes(),
        links: this.links(),
      },
    };
    if (this.include) {
      data.data.relationships = this.relationships();
    }
    return data;
  }

  relationships() {
    const data = {};
    this.include.forEach((relationName) => {
      const RelationClass = this.getter(relationName);
      const serializer = new RelationClass(this.resource[relationName], {
        include: this.include,
      });
      data[relationName] = serializer.createRelationUnit();
    });
    return data;
  }

  attributes() {
    return {
      senderId: this.resource.senderId,
      dialogId: this.resource.dialogId,
      message: this.resource.message,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/dialog/message/${this.resource.id}` };
  }
}
export default MessageSerializer;
