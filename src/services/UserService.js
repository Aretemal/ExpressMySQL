import User from '../models/user.js';
import { ResponseObjectJSON } from '../utils/creatorJSON.js';

class UserService {
  async getOne(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    return ResponseObjectJSON.render({
      user,
      resultCode: 0,
    });
  }

  async getStatus(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    const { status } = user;
    return ResponseObjectJSON.render({
      status,
      resultCode: 0,
    });
  }
}
export default new UserService();
