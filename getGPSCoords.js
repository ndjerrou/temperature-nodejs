// calculating gps coord from a city's name ...
const axios = require('axios');

const calculateTemperature = require('./getTemperature');

module.exports = (city) => {
  const OWP_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

  const API_KEY = process.env.API_KEY;

  // axios.get(...)
  axios(OWP_ENDPOINT, {
    params: {
      // we add the query string parameters to the end of the endpoint
      q: city,
      appid: API_KEY,
    },
  })
    .then(({ data }) => {
      const coords = data.coord;

      calculateTemperature(coords); // we calculate the temperature
    })
    .catch((err) => console.log('ERR = ', err));
};
