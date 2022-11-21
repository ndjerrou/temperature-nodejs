const axios = require('axios');

module.exports = async ({ lon, lat }, city) => {
  const API_KEY = process.env.API_KEY;

  const OWP_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

  const {
    data: {
      main: { temp: absoluteTemperature },
    },
  } = await axios(OWP_ENDPOINT, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  const temp = (absoluteTemperature - 273).toFixed(1);

  const cityCapitalized = city[0].toUpperCase() + city.slice(1);

  console.log(`À ${cityCapitalized}, il fait actuellement ${temp}°`);
};
