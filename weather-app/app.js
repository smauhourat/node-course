const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=6962c0c3606eb129fae12c0b74417542&query=Buenos%20Aires"

request({ url: url, json: true }, (error, response, body) => {
    console.log(body.current)
    //temperature
    //feelslike
    console.log('It is currenttly', body.current.temperature, 'degrees out. It feels like', body.current.feelslike, 'degrees out.')
})