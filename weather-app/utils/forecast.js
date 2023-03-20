const request = require('postman-request')

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast = (lat, lon, callback) => {
    const url = "http://api.weatherstack.com/forecast?access_key=6962c0c3606eb129fae12c0b74417542&query=" + lat + "," + lon

    request({ url: url, json: true }, (error, response, body) => {
        console.log(url)
        if (error) {
            callback('Network Error', undefined)
        } else if (body.error) {
            callback('Service currently not available', undefined)
        } else {
            const weatherStatus = "Today is " + body.current.weather_descriptions[0] + ". " + "It is currently " + body.current.temperature + " degres out. It is " + body.current.precip + "% chance of rain."
            callback(undefined, weatherStatus)
        }
    })
}


module.exports = forecast  