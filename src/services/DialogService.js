import { Op } from 'sequelize';
import Dialog from '../models/dialog.js';
import Message from '../models/message.js';
import User from '../models/user.js';

class DialogService {
  async sendMessage({ message }, recipientId, senderId) {
    console.log({ message, recipientId, senderId });
    let dialog = await Dialog.findOne({
      where: { senderId, recipientId },
    });
    if (!dialog) {
      dialog = await Dialog.create({ senderId, recipientId });
    }
    const content = await Message.create({ message, dialogId: dialog.id });
    return content;
  }

  async getAllMessage(authId, otherId) {
    const data = await Message.findAll({
      include: {
        model: Dialog,
        as: 'messenger',
        where: {
          [Op.or]: [
            { senderId: authId, recipientId: otherId },
            { senderId: otherId, recipientId: authId },
          ],
        },
      },
    });
    const messages = data.map((item) => {
      item.senderId = item.messenger.senderId;
      item.recipientId = item.messenger.recipientId;
      return item;
    });
    return messages;
  }

  async getAllCompanions(id) {
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
      attributes: ['id', 'firstName', 'lastName', 'login', 'email', 'status', 'ava'],
      where: {
        id: {
          [Op.in]: uniqueId,
        },
      },
    });
    const users = data.map((user) => user.dataValues);
    return users;
  }
}

export default new DialogService();
