import { validationResult } from 'express-validator';
import AuthService from '../services/AuthService.js';

class AuthController {
  async registration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка регистрациии' });
    }
    const response = await AuthService.registration(req.body);
    return response;
  }

  async login(req, res, next) {
    const response = await AuthService.login(req.body);
    return res.json(response);
  }
}

export default new AuthController();
