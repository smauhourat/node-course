const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=6962c0c3606eb129fae12c0b74417542&query=Buenos%20Aires"

request({ url: url, json: true }, (error, response, body) => {
    //console.log(body.current)
    //temperature
    //feelslike
    //console.log('It is currenttly', body.current.temperature, 'degrees out. It feels like', body.current.feelslike, 'degrees out.')
})

const geocodeUrl = "https://api.radar.io/v1/geocode/forward?query=841+broadway+new+york"
const auth_api = "Authorization: prj_test_pk_7dc5278af7990f2c961f721ad0b8d8078a854f78"

request({ url: url, json: true, headers: { 'Authorization' : auth_api} }, (error, response, body) => {
    console.log(body)

    const latitude = body.location.lat
    const longitude = body.location.lon
    console.log(latitude, longitude)
})