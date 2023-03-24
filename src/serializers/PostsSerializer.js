import Serializer from './Serializer.js';

class PostsSerializer extends Serializer {
  type() {
    return 'Posts';
  }

  id() {
    return 0;
  }

  attributes() {
    return {
      posts: this.posts(),
    };
  }

  posts() {
    return this.resource.attributes.map((post) => {
      const serializer = new this.options({ attributes: post, link: `http://localhost:5000/api/post/${post.id}` });
      return serializer.serialize();
    });
  }
}
export default PostsSerializer;
