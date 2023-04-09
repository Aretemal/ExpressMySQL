import FollowSerializer from '../serializers/FollowSerializer.js';
import MessageSerializer from '../serializers/MessageSerializer.js';
import UserSerializer from '../serializers/UserSerializer.js';

export const getClass = (name) => {
  switch (name) {
    case 'user': return UserSerializer;
    case 'message': return MessageSerializer;
    case 'follow': return FollowSerializer;
    default: return 'Error';
  }
};
