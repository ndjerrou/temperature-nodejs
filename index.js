const calculateGpsCoord = require('./getGPSCoords');
require('dotenv').config();

init();

function init() {
  const [, , city] = process.argv; // destructuring an array

  //case where city is not provided

  if (!city) {
    // undefined is a falsy value so !undefined is a truthy value
    console.error('Please insert a valid city name');
    process.exit(1);
  }

  calculateGpsCoord(city);
}
