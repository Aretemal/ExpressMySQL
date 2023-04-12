import { Op } from 'sequelize';
import Dialog from '../models/dialog.js';
import Message from '../models/message.js';
import User from '../models/user.js';
import UserDialog from '../models/User_Dialog.js';

class DialogService {
  async sendMessage({ message, recipientId }, senderId, dialogId) {
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

  async deleteMessage(id) {
    const dialog = await Message.findOne({ where: { id } });
    const deleteMessage = await dialog.destroy();
    return deleteMessage;
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
    const messages = await Message.findAll({
      where: {
        dialogId: id,
      },
    });
    return messages;
  }
}

export default new DialogService();
