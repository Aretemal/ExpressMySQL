import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import User from '../models/user.js';
import AppError from '../utils/AppError.js';

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
      throw new AppError('User already exists', 404);
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const user = await User.create({
      login, password: hashPassword, firstName, lastName, email,
    });
    return {
      id: user.id,
      login,
      firstName,
      lastName,
      email,
      ava: user.dataValues.ava,
      status: user.dataValues.status,
    };
  }

  async login({ login, password }) {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      throw new AppError(`User ${login} not found`, 417);
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new AppError('Wrong password entered', 417);
    }
    const token = generationAccessToken(user.id);
    return { token, id: user.id };
  }
}

export default new AuthService();
