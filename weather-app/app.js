const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=6962c0c3606eb129fae12c0b74417542&query=Buenos%20Aires"

request({ url: url }, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data)
})