const axios = require('axios');

module.exports = (coords) => {
  const API_KEY = process.env.API_KEY;

  const OWP_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

  axios(OWP_ENDPOINT, {
    params: {
      lat: coords.lat, // shorthand properties
      lon: coords.lon,
      appid: API_KEY,
    },
  }).then(({ data }) => {
    const absoluteTemp = data.main.temp;

    const temp = Math.ceil(absoluteTemp - 273);

    console.log(temp);
  });
};
