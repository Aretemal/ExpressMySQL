import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config.js';
import User from '../models/user.js';
import { ResponseObjectJSON } from '../utils/creatorJSON.js';

const { secret } = config;

const generationAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};
class AuthService {
  async registration({
    userName: login, password, firstName, lastName, email,
  }) {
    const candidate = await User.findOne({
      where: {
        login,
      },
    });
    if (candidate) {
      throw new Error('Пользователь уже существует');
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    await User.create({
      firstName, lastName, password: hashPassword, email, login, status: null, ava: null,
    });
    return ResponseObjectJSON.render({
      message: `User ${login} was created successfully`,
      resultCode: 0,
    });
  }

  async login({ login, password }) {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      throw new Error(`Пользователь ${login} не найден`);
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new Error('Введен неверный пароль');
    }
    const token = generationAccessToken(user.userId);
    return ResponseObjectJSON.render({
      token,
      resultCode: 0,
    });
  }
}

export default new AuthService();
