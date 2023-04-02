import MessageSerializer from '../serializers/MessageSerializer.js';
import MessagesSerializer from '../serializers/MessagesSerializer.js';
import UsersSerializer from '../serializers/UsersSerializer.js';
import DialogService from '../services/DialogService.js';

class DialogController {
  async sendMessage(req, res, next) {
    const message = await DialogService.sendMessage(req.body, req.params.id, req.user.id);
    console.log(message);
    req.serializer = new MessageSerializer(message, req);
    next();
  }

  async getAllMessage(req, res, next) {
    const messages = await DialogService.getAllMessage(req.user.id, req.params.id);
    req.serializer = new MessagesSerializer(messages, req);
    next();
  }

  async getAllInterlocutors(req, res, next) {
    const users = await DialogService.getAllInterlocutors(req.user.id);
    req.serializer = new UsersSerializer({ users }, req);
    next();
  }
}
export default new DialogController();
