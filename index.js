const calculateGpsCoord = require('./getGPSCoords');
require('dotenv').config();

init();

function init() {
  const [, , city] = process.argv;

  if (!city) {
    console.error('Please insert a valid city name');
    process.exit(1);
  }

  calculateGpsCoord(city);
}
