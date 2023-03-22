import { validationResult } from 'express-validator';
import AuthService from '../services/AuthService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import AuthSerializers from '../utils/JsonSerializer/AuthSerializers.js';

class AuthController {
  async registration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка регистрациии' });
    }
    const data = await AuthService.registration(req.body);
    res.json(AuthSerializers.registration(data, fullUrlCreator(req)));
  }

  async login(req, res) {
    const data = await AuthService.login(req.body);
    res.json(AuthSerializers.login(data, fullUrlCreator(req)));
  }
}

export default new AuthController();
