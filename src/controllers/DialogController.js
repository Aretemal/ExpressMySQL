import { validationResult } from 'express-validator';
import CollectionSerializer from '../serializers/CollectionSerializer.js';
import DialogSerializer from '../serializers/DialogSerializer.js';
import MessageSerializer from '../serializers/MessageSerializer.js';
import DialogService from '../services/DialogService.js';
import ValidationError from '../utils/errors/ValidationError.js';
import { getClass } from '../utils/getClass.js';

class DialogController {
  async sendMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError(errors.array());
    }
    const message = await DialogService.sendMessage(req.body, req.params.id, req.user.id);
    req.serializer = new MessageSerializer(message);
    next();
  }

  async deleteMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError(errors.array());
    }
    const message = await DialogService.deleteMessage(req.params.id);
    req.serializer = new MessageSerializer(message, req);
    next();
  }

  async getAllDialogs(req, res, next) {
    const users = await DialogService.getAllDialogs(req.user.id);
    req.serializer = new CollectionSerializer(users, { serializerType: DialogSerializer });
    next();
  }

  async getAllMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError(errors.array());
    }
    const messages = await DialogService.getAllMessage(req.params.id);
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
