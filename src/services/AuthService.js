import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import User from '../models/user.js';
import { generationAccessToken } from '../utils/generationAccessToken.js';

dotenv.config();

class AuthService {
  async registration(
    {
      login, password, firstName, lastName, email,
    },
    next,
  ) {
    const candidate = await User.findOne({
      where: {
        login,
      },
    });
    if (candidate) {
      next({ errorsArray: [{ msg: 'User already exists' }] });
      return;
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const user = await User.create({
      login, password: hashPassword, firstName, lastName, email,
    });
    const token = generationAccessToken(user.id);
    return { token, id: user.id, login: user.login };
  }

  async login({ login, password }, next) {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      next({ errorsArray: [{ msg: 'Login or password is incorrect' }] });
      return;
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      next({ errorsArray: [{ msg: 'Login or password is incorrect' }] });
      return;
    }
    const token = generationAccessToken(user.id);
    return { token, id: user.id, login: user.login };
  }
}

export default new AuthService();
