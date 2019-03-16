import jwt from 'jsonwebtoken';
/** User controller class */
class UserController {
  /**
   * @function login user login
   * @memberof UserController
   * @static
   */
  // eslint-disable-next-line consistent-return
  static login(req, res) {
    let { username, password } = req.body;
    username = username && username.toString().trim();
    password = password && password.toString();
    const authUser = process.env.USER;
    const authPassword = process.env.PASSWORD;
    if (username !== authUser) {
      return res.status(401).json({
        status: 401,
        error: 'You have entered an invalid username',
      });
    }
    if (password !== authPassword) {
      return res.status(401).json({
        status: 401,
        error: 'You have entered an invalid password',
      });
    }
    try {
      if (username === authUser && password === authPassword) {
        const token = jwt.sign(
          {
            username,
          }, process.env.SECRET_KEY, { expiresIn: '1h' },
        );
        return res.status(200).json({
          token,
          message: 'Login successfully',
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'unable to login, try again!',
        message: err.message,
      });
    }
  }
}
export default UserController;
