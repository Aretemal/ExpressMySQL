import jwt from 'jsonwebtoken';

export const tokenMiddleware = (req, res, next) => {
  try {
    if (req.method === 'OPTIONS' || !req.headers.authorization) {
      next();
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Пользователь не авторизован' });
    }
    const decodedData = jwt.verify(token, process.env.SECRET_KEY_RANDOM);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: 'Пользователь не авторизован' });
  }
};
