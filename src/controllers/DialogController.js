import { validationResult } from 'express-validator';
import { messageAPI } from '../api/api.js';
import CollectionSerializer from '../serializers/CollectionSerializer.js';
import DialogSerializer from '../serializers/DialogSerializer.js';
import MessageSerializer from '../serializers/MessageSerializer.js';
import DialogService from '../services/DialogService.js';
import { getClass } from '../utils/getClass.js';

class DialogController {
  async sendMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const message = await DialogService.sendMessage(req.body, req.params.id, req.user.id, next);
    req.serializer = new MessageSerializer(message);
    const data = await messageAPI
      .sendMessageToRoom({
        message: req.serializer.serialize(req),
        id: req.params.id,
      });
    next();
  }

  async deleteMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const message = await DialogService.deleteMessage(req.params.id, next);
    req.serializer = new MessageSerializer(message, req);
    next();
  }

  async getAllDialogs(req, res, next) {
    const users = await DialogService.getAllDialogs(req.user.id, next);
    req.serializer = new CollectionSerializer(users, { serializerType: DialogSerializer });
    next();
  }

  async getAllMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const messages = await DialogService.getAllMessage(req.params.id, next);
    req.serializer = new CollectionSerializer(
      messages,
      {
        serializerType: MessageSerializer,
        include: ['user'],
        getter: getClass,
      },
    );
    next();
  }
}
export default new DialogController();
