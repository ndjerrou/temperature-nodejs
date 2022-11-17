// Project
const axios = require('axios')
const cities = require('all-the-cities')

city = cities.filter(city => city.name === (process.argv[2]))
sortedCity = city.sort((a, b) => b.population - a.population)
filtredCity = sortedCity[0]
coords = filtredCity.loc.coordinates
const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=6edefaabdbd92cd6dec9908ffa90d25b`)
request.then(({data: {main}}) => {
    let temperature = main.temp - 273.15
    temperature = Math.round(temperature)
    let humidity = main.humidity
    console.log(`il fais ${temperature}°C à ${filtredCity.name}`)
})