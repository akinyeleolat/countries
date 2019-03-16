import validateUserLogin from './validateUserLogin';
import verifyToken from './verifyToken';
import validateInput from './validateInput';

const middlewares = {
  validateUserLogin,
  verifyToken,
  validateInput,
};
export default middlewares;
