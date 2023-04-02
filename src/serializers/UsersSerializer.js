import fullUrlCreator from '../utils/fullUrlCreator.js';
import CollectionSerializer from './CollectionSerializer.js';

class UsersSerializer extends CollectionSerializer {
  constructor(resource, serializerType, metaData, request = null) {
    super(resource, serializerType, request);
    this.metaData = metaData;
  }

  meta() {
    return {
      countOfUsers: this.metaData,
    };
  }

  serialize() {
    const data = super.serialize();
    data.meta = this.meta();
    return data;
  }

  links() {
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: `${process.env.API_URL}/users` };
  }
}
export default UsersSerializer;
