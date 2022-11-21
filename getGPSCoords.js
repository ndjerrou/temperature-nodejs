const axios = require('axios');

const calculateTemperature = require('./getTemperature');

module.exports = async (city) => {
  const OWP_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

  const API_KEY = process.env.API_KEY;

  try {
    const {
      data: { coord: coords },
    } = await axios(OWP_ENDPOINT, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });

    calculateTemperature(coords, city);
  } catch (err) {
    console.err(err.message);
  }
};
