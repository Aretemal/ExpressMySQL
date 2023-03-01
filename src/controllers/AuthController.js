import { validationResult } from 'express-validator';
import Joi from 'joi';
import AuthService from '../services/AuthService.js';

const schema = Joi.object({
  userId: Joi.number().required(),
});
class AuthController {
  async registration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка регистрациии' });
    }
    await AuthService.registration(req.body);
    return { resultCode: 0 };
  }

  async login(req, res, next) {
    const token = await AuthService.login(req.body);
    return res.json({ token });
  }
}

export default new AuthController();
