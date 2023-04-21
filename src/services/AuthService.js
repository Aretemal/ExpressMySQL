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
  async registration(
    {
      userName: login, password, firstName, lastName, email,
    },
    next,
  ) {
    const candidate = await User.findOne({
      where: {
        login,
      },
    });
    if (candidate) {
      next({ errorsArray: [{ msg: '437' }], title: 'Service Error' });
      return;
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

  async login({ login, password }, next) {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      next({ errorsArray: [{ msg: '438' }], title: 'Service Error' });
      return;
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      next({ errorsArray: [{ msg: '439' }], title: 'Service Error' });
      return;
    }
    const token = generationAccessToken(user.id);
    return { token, id: user.id };
  }
}

export default new AuthService();
