import Serializer from './Serializer.js';

class PostSerializer extends Serializer {
  type() {
    return 'Post';
  }

  id() {
    return `${this.resource.id}`;
  }

  serialize() {
    return {
      data: [{
        type: this.type(),
        id: this.id(),
        attributes: this.attributes(),
      }],
      links: this.link(),
    };
  }

  collectionSerializer() {
    return {
      type: this.type(),
      id: this.id(),
      attributes: this.attributes(),
    };
  }

  attributes() {
    return {
      authorId: this.resource.authorId,
      content: this.resource.content,
    };
  }
}
export default PostSerializer;
