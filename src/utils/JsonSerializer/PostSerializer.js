import Serializer from './Serializer.js';

class PostSerializer extends Serializer {
  create(data, links, id) {
    return this.serializer(data, id, 'Post', links);
  }

  getAll(data, links, id) {
    return this.serializer(data, id, 'Array Posts', links);
  }

  getOne(data, links, id) {
    return this.serializer(data, id, 'Post', links);
  }
}
export default new PostSerializer();
