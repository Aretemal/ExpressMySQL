import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import config from '../config/config.js';

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
      login, password: hashPassword, firstName, lastName, email,
    });
    return { message: 'Пользователь зарегистрирован' };
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
    const token = generationAccessToken(user.id);
    return token;
  }
}

export default new AuthService();
