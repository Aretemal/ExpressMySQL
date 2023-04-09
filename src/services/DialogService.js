import { Op } from 'sequelize';
import Dialog from '../models/dialog.js';
import Message from '../models/message.js';
import User from '../models/user.js';
import UserDialog from '../models/User_Dialog.js';

class DialogService {
  async sendMessage({ message, recipientId }, dialogId, senderId) {
    let dialog = await UserDialog.findOne({
      where: {
        UserId: senderId, DialogId: dialogId,
      },
    });
    if (!dialog) {
      dialog = await Dialog.create();
      await UserDialog.create({ UserId: senderId, DialogId: dialog.id });
      await UserDialog.create({ UserId: recipientId, DialogId: dialog.id });
    }
    const content = await Message.create({ message, dialogId: dialog.id, senderId });
    return content;
  }

  async getAllDialogs(id) {
    const user = await User.findOne({ where: { id } });
    const data = await user.getDialogs();
    const dialogs = data.map((item) => {
      delete item.dataValues.UserDialog;
      return item.dataValues;
    });
    return dialogs;
  }

  async getAllMessage(id) {
    const data = await Message.findAll({
      where: {
        dialogId: id,
      },
    });
    const dialog = await Dialog.findOne({ where: { id } });
    const users = await dialog.getUsers();
    const messages = data.map((item) => {
      const person = users.find((user) => user.dataValues.id === item.dataValues.senderId);
      item.dataValues.user = person.dataValues;
      delete item.dataValues.UserDialog;
      return item.dataValues;
    });
    return messages;
  }
}

export default new DialogService();
