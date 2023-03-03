import User from '../models/user.js';
import { ResponseObjectJSON } from '../utils/creatorJSON.js';

class ProfileService {
  async getInfoAuthorizedUser(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    const {
      login, firstName, lastName, email, status,
    } = user;
    return ResponseObjectJSON.render({
      infoAboutUser: {
        login, firstName, lastName, email, status,
      },
      resultCode: 0,
    });
  }

  async updateStatus(status, id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const oldUser = await User.findByPk(id);
    const {
      login, firstName, lastName, email,
    } = oldUser;
    await oldUser.update({
      login, firstName, lastName, email, status,
    });
    return ResponseObjectJSON.render({
      resultCode: 0,
    });
  }
}
export default new ProfileService();
