import CollectionSerializer from '../serializers/CollectionSerializer.js';
import MessageSerializer from '../serializers/MessageSerializer.js';
import UsersSerializer from '../serializers/UsersSerializer.js';
import DialogService from '../services/DialogService.js';

class DialogController {
  async sendMessage(req, res, next) {
    const message = await DialogService.sendMessage(req.body, req.params.id, req.user.id);
    req.serializer = new MessageSerializer(message, req);
    next();
  }

  async getAllMessage(req, res, next) {
    const messages = await DialogService.getAllMessage(req.user.id, req.params.id);
    req.serializer = new CollectionSerializer(messages, MessageSerializer, req);
    next();
  }

  async getAllInterlocutors(req, res, next) {
    const users = await DialogService.getAllInterlocutors(req.user.id);
    req.serializer = new CollectionSerializer(users, UsersSerializer, req);
    next();
  }
}
export default new DialogController();
