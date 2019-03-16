import express from 'express';
import UserController from '../controllers/user';
import CountryController from '../controllers/country';
import middlewares from '../middlewares';

const router = express.Router();
/** User login */
router.post('/login', middlewares.validateUserLogin, UserController.login);
/** Country routes */
router.use('/countries', middlewares.verifyToken);
router.get('/countries', CountryController.getAllCountry);
router.post('/countries/', middlewares.validateInput, CountryController.addCountry);
router.delete('/countries/', middlewares.validateInput, CountryController.deleteCountry);
export default router;
