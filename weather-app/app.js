const request = require('postman-request')
const geocode = require('./utils/geocode')

//const url = "http://api.weatherstack.com/current?access_key=6962c0c3606eb129fae12c0b74417542&query=Buenos%20Aires"
//const url = "http://api.weatherstack.com/current?access_key=6962c0c3606eb129fae12c0b74417542&query=-34.607357,-58.454595"
//const url = "http://api.weatherstack.com/current?access_key=6962c0c3606eb129fae12c0b74417542&query=-34.607357"

// request({ url: url, json: true }, (error, response, body) => {
//     if (error) { //low level error
//         console.log(error)
//     } else if (!body.success) { // api error
//         console.log(body.error)
//     } else {
//         console.log(body.current)
//     }
    
//     //console.log('It is currenttly', body.current.temperature, 'degrees out. It feels like', body.current.feelslike, 'degrees out.')
// })



//const geocodeUrl = "https://api.radar.io/v1/geocode/forward?query=841+broadway+new+york"

// const geocodeUrl = "https://api.radar.io/v1/geocode/forward?query=EstoEsUnerror"
// const auth_api = "prj_test_pk_7dc5278af7990f2c961f721ad0b8d8078a854f78"

// request({ url: geocodeUrl, json: true, headers: { 'Authorization' : auth_api} }, (error, response, body) => {

//     // console.log(body)
//     // console.log(error)

//     if (error) {
//         console.log(error)
//     } else if (body.addresses.length == 0) {
//         console.log('Service currently not available')
//     } else {
//         const latitude = body.addresses[0].latitude
//         const longitude = body.addresses[0].longitude
//         console.log(latitude, longitude)
//     }
// })


geocode('Buenos Aires', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})


geocode('8a76sda6s8a7sd867a', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})