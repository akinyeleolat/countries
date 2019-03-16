/**
 * This function check for space.
 * @param {number} value any
 * @returns {boolean} true or false.
 */
export const checkEmpty = (value) => {
  if (value.trim() === '' || (!value)) {
    return true;
  }
};
/**
     * This function check if the value is a string.
     * @param {string} value any
     * @returns {boolean} true or false.
     */
export const checkString = (value) => {
  // if (/^[A-Za-z ]+$/.test(value)) {
  //   return true;
  // }
  if (String(value).match(/[A-Za-z ]/g)) {
    return true;
  }
};
/**
     * This function check if the value is a valid password text, number and sysmbols not less than 6.
     * @param {number} value any
     * @returns {boolean} true or false.
     */
export const checkPassword = (value) => {
  if ((String(value).match(/[A-Za-z0-9]/g)) && (String(value).match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g))) {
    return true;
  }
};
  /**
     * This function check if the value is a valid length with minimum and maximum value.
     * @param {number} value any
     * @returns {boolean} true or false.
     */
export const checkLengthMinMax = (value, min, max) => {
  if ((value.length >= min) && (value.length <= max)) { return true; }
};
  /**
     * This function check if the value is a valid length
     * @param {number} value any
     * @returns {boolean} true or false.
     */
export const checkLengthMax = (value, max) => {
  if (value.length === max) { return true; }
};
  /**
     * This function check if the value has a valid length less than paramter.
     * @param {number} value any
     * @returns {boolean} true or false.
     */
export const checkLengthMin = (value, min) => {
  if (value.length >= min) { return true; }
};
/**
   * This is a validation for user  data
   * @constant
   *
   * @param {String} message - any error message we provide
   *
   * @returns {Object}
   */
const errorMsg = [];
export const validationError = (req, message) => {
  errorMsg.push(message);
  req.error = 'redflag';
  return errorMsg;
};
export const getErrorMsg = (req, res) => {
  res.status(400).json({
    status: 400,
    error: errorMsg,
  });
  errorMsg.length = 0;
  req.error = null;
  return errorMsg;
};
