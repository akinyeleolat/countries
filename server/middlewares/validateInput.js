import * as validate from './validate';
/**
   * This is a validation for party creation
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validateInput
   */
const validateInput = (req, res, next) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) next(validate.validationError(req, 'countryName required'));
  if (req.error) return next(validate.getErrorMsg(req, res));
  if (req.body.countryName === undefined) next(validate.validationError(req, 'country name required'));
  if (req.error) return next(validate.getErrorMsg(req, res));
  let {
    countryName,
  } = req.body;
  countryName = countryName && countryName.toString().trim();
  if (validate.checkEmpty(countryName)) next(validate.validationError(req, 'country name cannot be empty'));
  if (!validate.checkEmpty(countryName)) {
    if (!validate.checkLengthMin(countryName, 4)) next(validate.validationError(req, 'Country name cannot be less than 4 characters'));
    if (!validate.checkString(countryName)) next(validate.validationError(req, 'Invalid character in country name'));
  }
  if (req.error) return next(validate.getErrorMsg(req, res));
  return next();
};
export default validateInput;
