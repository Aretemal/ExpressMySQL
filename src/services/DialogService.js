import { Op } from 'sequelize';
import Dialog from '../models/dialog.js';
import Message from '../models/message.js';
import User from '../models/user.js';

class DialogService {
  async sendMessage({ message }, recipientId, senderId) {
    let dialog = await Dialog.findOne({
      where: {
        [Op.or]: [
          { firstId: senderId, secondId: recipientId },
          { secondId: senderId, firstId: recipientId },
        ],
      },
    });
    if (!dialog) {
      dialog = await Dialog.create({ firstId: senderId, secondId: recipientId });
    }
    const content = await Message.create({ message, dialogId: dialog.id, senderId });
    return content;
  }

  async getAllMessage(id) {
    const messages = await Message.findAll({
      where: {
        dialogId: id,
      },
    });
    return messages;
  }

  async getAllDialogs(id) {
    const dialogsId = await Dialog.findAll({
      attributes: ['id', 'firstId', 'secondId'],
      where: {
        [Op.or]: [
          { firstId: id },
          { secondId: id },
        ],
      },
      group: ['firstId', 'secondId'],
    });
    const usersId = dialogsId.map((dialog) => {
      if (dialog.firstId === id) {
        return dialog.secondId;
      }
      return dialog.firstId;
    });
    const uniqueId = [...new Set(usersId)];
    const data = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'login', 'email', 'status', 'ava'],
      where: {
        id: {
          [Op.in]: uniqueId,
        },
      },
    });
    const users = data.map((user) => user.dataValues);
    for (let i = 0; i < users.length; i++) {
      users[i].dialogId = dialogsId[i].id;
    }
    return users;
  }
}

export default new DialogService();
