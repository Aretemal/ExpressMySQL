import { Op } from 'sequelize';
import Dialog from '../models/dialog.js';
import User from '../models/user.js';

class DialogService {
  async sendMessage({ message }, recipientId, senderId) {
    const content = await Dialog.create({ message, senderId, recipientId });
    return content;
  }

  async getAllMessage(authId, otherId) {
    const messages = await Dialog.findAll({
      where: {
        [Op.or]: [
          { senderId: authId, recipientId: otherId },
          { senderId: otherId, recipientId: authId },
        ],
      },
    });
    return messages;
  }

  async getAllInterlocutors(id) {
    const dialogsId = await Dialog.findAll({
      attributes: ['senderId', 'recipientId'],
      where: {
        [Op.or]: [
          { senderId: id },
          { recipientId: id },
        ],
      },
      group: ['senderId', 'recipientId'],
    });
    const usersId = dialogsId.map((dialog) => {
      if (dialog.senderId === id) {
        return dialog.recipientId;
      }
      return dialog.senderId;
    });
    const uniqueId = [...new Set(usersId)];
    const data = await User.findAll({
      attributes: ['userId', 'firstName', 'lastName', 'login', 'email', 'status', 'ava'],
      where: {
        userId: {
          [Op.in]: uniqueId,
        },
      },
    });
    const users = data.map((user) => user.dataValues);
    return users;
  }
}

export default new DialogService();
