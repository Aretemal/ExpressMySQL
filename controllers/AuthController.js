import { validationResult } from 'express-validator';
import AuthService from '../services/AuthService.js';

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Ошибка регистрациии' });
      }
      const result = await AuthService.registration(req.body);
      return result;
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
      const token = await AuthService.login(req.body);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }
}

export default new AuthController();
