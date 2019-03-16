import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();
/**
 * Authorization: Bearer <access_token>
 * @constant
 *
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object
 *
 * @returns {Object}
 *
 * @exports verifyToken
 */
const verifyToken = (req, res, next) => {
  const token = req.header('token');
  if (!token) {
    const err = Error('User authorization token is required');
    err.statusCode = 401;
    res.status(401).json({
      status: 401,
      error: 'User authorization token is required',
    });
    return next(err);
  }

  if (token === undefined || token === null) {
    const err = Error('User authorization token is required');
    err.statusCode = 401;
    res.status(401).json({
      status: 401,
      error: 'User authorization token is required',
    });
    return next(err);
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = decoded;
    req.user = decoded.username;
    const authUser = process.env.USER;
    if (req.user !== authUser) {
      return res.status(401).json({
        status: 401,
        error: 'Invalid user authorization token',
      });
    }
    return next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      const error = Error('Expired user authorization token');
      error.statusCode = 401;
      res.status(401).json({
        status: 401,
        error: 'Expired user authorization token',
      });
      return next(error);
    }
    const error = Error('Invalid user authorization token');
    error.statusCode = 401;
    res.status(401).json({
      status: 401,
      error: 'Invalid user authorization token',
    });
    return next(error);
  }
};
export default verifyToken;
