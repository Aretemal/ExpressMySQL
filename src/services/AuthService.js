import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import User from '../models/user.js';

dotenv.config();

const generationAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.SECRET_KEY_RANDOM, { expiresIn: '24h' });
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
    const data = await User.create({
      login, password: hashPassword, firstName, lastName, email,
    });
    return data;
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
    return { token, user };
  }
}

export default new AuthService();
