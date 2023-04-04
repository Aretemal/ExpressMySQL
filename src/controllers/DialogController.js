import CollectionSerializer from '../serializers/CollectionSerializer.js';
import DialogSerializer from '../serializers/DialogSerializer.js';
import UserSerializer from '../serializers/UserSerializer.js';
import DialogService from '../services/DialogService.js';

class DialogController {
  async sendMessage(req, res, next) {
    const message = await DialogService.sendMessage(req.body, req.params.id, req.user.id);
    req.serializer = new DialogSerializer(message, req);
    next();
  }

  async getAllMessage(req, res, next) {
    const messages = await DialogService.getAllMessage(req.user.id, req.params.id);
    req.serializer = new CollectionSerializer(messages, DialogSerializer, req);
    next();
  }

  async getAllCompanions(req, res, next) {
    const users = await DialogService.getAllCompanions(req.user.id);
    req.serializer = new CollectionSerializer(users, UserSerializer, req);
    next();
  }
}
export default new DialogController();
