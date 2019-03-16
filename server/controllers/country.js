import { country, countryData } from '../models/country';

/** country controller class */

class CountryController {
  /**
 * @function getAllCountry Get all countries
 * @memberof CountryController
 * @static
 */
  static getAllCountry(req, res) {
    if (country.length < 1) {
      return res.status(200).send({
        message: 'Country list empty',
      });
    }
    return res.status(200).send(country);
  }

  /**
 * @function addCountry Add country
 * @memberof countryController
 * @static
 */
  static addCountry(req, res) {
    let {
      countryName,
    } = req.body;
    countryName = countryName ? countryName.toString().toUpperCase().replace(/\s+/g, ' ') : countryName;
    const getCountry = country.find(countries => countries === countryName);
    if (getCountry) {
      return res.status(409).send({
        message: `Duplicate entry not allowed for ${countryName}`,
      });
    }
    const newCountry = countryName;
    country.push(newCountry);
    return res.status(201).send({
      message: `${newCountry} added to country list`,
    });
  }


  /**
 * @function deleteCountry delete country from the list
 * @memberof CountryController
 * @static
 */
  static deleteCountry(req, res) {
    let {
      countryName,
    } = req.body;
    countryName = countryName ? countryName.toString().toUpperCase().replace(/\s+/g, ' ') : countryName;
    const countryDetails = country.find(c => c === countryName);
    if (!countryDetails) {
      res.status(404).send({
        error: `${countryName} not in the list`,
      });
      return;
    }
    const filteredCountry = country.filter(countries => countries !== countryDetails);
    countryData(filteredCountry);
    res.status(200).send({
      status: 200,
      message: `${countryDetails} deleted`,
    });
  }
}
export default CountryController;
