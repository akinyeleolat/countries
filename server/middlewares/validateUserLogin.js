import * as validate from './validate';
/**
   * This is a validation for user login
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validateUserLogin
   */
const validateUserLogin = (req, res, next) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) next(validate.validationError(req, 'username and password are required'));
  if (req.error) return next(validate.getErrorMsg(req, res));
  if (req.body.username === undefined) next(validate.validationError(req, 'username required'));
  if (req.body.password === undefined) next(validate.validationError(req, 'Password required'));
  if (req.error) return next(validate.getErrorMsg(req, res));
  let {
    username, password,
  } = req.body;
  username = username && username.toString().trim();
  password = password && password.toString();
  if (validate.checkEmpty(username)) next(validate.validationError(req, 'username is required'));
  if (!validate.checkLengthMin(username, 4)) next(validate.validationError(req, 'Username cannot be less than 4 characters'));
  if (!password) next(validate.validationError(req, 'password is required'));
  if (!validate.checkLengthMin(password, 4)) next(validate.validationError(req, 'Password cannot be less than 4 characters'));

  if (req.error) return next(validate.getErrorMsg(req, res));
  return next();
};
export default validateUserLogin;
