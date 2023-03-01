import jwt from 'jsonwebtoken';
import config from '../../config.js';

const { secret } = config;
export const tokenMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS' || !req.headers.authorization) {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Пользователь не авторизован' });
    }
    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: 'Пользователь не авторизован' });
  }
};
