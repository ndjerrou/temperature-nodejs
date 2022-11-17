// Project
//use axios
const axios = require('axios')
//get coords from open weather map
const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${process.argv[2]}&appid=6edefaabdbd92cd6dec9908ffa90d25b`)
//use the coords
request.then(({data: {coord: {lat, lon}}}) => {
    //get temp from open weather map with the coords
    request1 = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6edefaabdbd92cd6dec9908ffa90d25b`)
    request1.then(({data: {main}}) => {
        //convert the temp from kelvin to celsius
        let temperature = main.temp - 273.15
        //round the temp
        temperature = Math.round(temperature)
        //useless humidity variable
        let humidity = main.humidity
        //log the requested response
        console.log(`il fais ${temperature}°C à ${process.argv[2]}`)
    })
})