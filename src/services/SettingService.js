import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import { generationAccessToken } from '../utils/generationAccessToken.js';

class SettingService {
  async changeLanguage(language, authId, next) {
    if (!language) {
      next({ errorsArray: [{ msg: 'Language not specified' }] });
      return;
    }
    const user = await User.findByPk(authId);
    const updatedUser = await user.update({ lang: language });
    return { language: updatedUser.dataValues.lang };
  }

  async getLanguage(authId, next) {
    const user = await User.findByPk(authId);
    return { language: user.dataValues.lang };
  }

  async changePassword(password, authId, next) {
    if (!password) {
      next({ errorsArray: [{ msg: 'Password not specified' }] });
      return;
    }
    const user = await User.findByPk(authId);
    const hashPassword = bcrypt.hashSync(password, 7);
    await user.update({ password: hashPassword });
    const token = generationAccessToken(authId);
    return { token };
  }
}
export default new SettingService();
